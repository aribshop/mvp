import { rewrite } from "@vercel/edge";
import { NextResponse } from "next/server";

import { Redis } from "@upstash/redis";

export const config = {
  regions: ["fra1"],
};

function getSubdomain(url: URL) {
  const subdomain = url.hostname.split(".")[0];
  console.log("Subdomain: " + url.hostname);
  return subdomain;
}

function getTemplateFromCookie(cookie: string | null) {
  if (cookie) {
    const cookies = cookie.split(";");
    const cookieTemplate = cookies
      .filter(Boolean)
      .find((c) => c.trim().startsWith("template="));
    if (cookieTemplate) {
      return cookieTemplate.split("=")[1];
    }
  }
  return false;
}

async function getTemplateFromRedis(subdomain: string) {
  const redis = new Redis({
    url: process.env.REDIS_URL as string,
    token: process.env.REDIS_TOKEN as string,
  });

  return ((await redis.hget("templates", subdomain)) as string) ?? "default";
}

function enrichURL(url: URL, subdomain: string, template: string) {
  if (subdomain == "localhost") return url;
  url.pathname = `website/${subdomain}/templates/${template}${url.pathname}`;

  return url;
}

function dropMiddleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (url.pathname.startsWith("/")) {
    return false;
  }
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);

  if (dropMiddleware(request)) return NextResponse.next();

  // check if the url is Next specific and rewrite it
  const subdomain = getSubdomain(url);

  // get template from cookie
  const cookieTemplate = getTemplateFromCookie(request.headers.get("cookie"));

  let template = "default";

  if (!cookieTemplate) {
    console.time("redis");
    template = await getTemplateFromRedis(subdomain);
    console.timeEnd("redis");
  } else {
    template = cookieTemplate;
  }

  if (template == "default") {
    return NextResponse.redirect("https://www.arib.shop");
  }

  const CookieHeaders: any = !cookieTemplate
    ? {
        "set-cookie": `template=${template}; path=/; max-age=31536000; HttpOnly`,
      }
    : {};

  const newUrl = enrichURL(url, subdomain, template);
  console.log("newUrl: " + newUrl.href);

  return NextResponse.rewrite(newUrl, {
    headers: {
      ...CookieHeaders,
    },
  });
}
