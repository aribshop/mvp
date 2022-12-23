import { rewrite } from "@vercel/edge";

import { Redis } from "@upstash/redis";

export const config = {
  // Only run the middleware on the home route
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);

  // check if the url is Next specific and rewrite it
  const subdomain = url.hostname.split(".")[0];

  console.log("CC" + url.hostname);

  // get template from cookie
  const cookie = request.headers.get("cookie");
  let template = "default";

  if (url.pathname.startsWith("/_next")) {
    return rewrite(url);
  }

  if (cookie) {
    const cookies = cookie.split(";");
    const cookieTemplate = cookies.filter(Boolean).find((c) =>
      c.trim().startsWith("template=")
    );
    if (cookieTemplate) {
      template = cookieTemplate.split("=")[1];
    }
  }
  console.log(template);

  // todo use a combinaiton of 
  if (template == "default") {
    console.time("redis");
    const redis = new Redis({
      url: process.env.REDIS_URL as string,
      token: process.env.REDIS_TOKEN as string,
    });

    template =
      ((await redis.hget("templates", subdomain)) as string) ?? "default";
    console.timeEnd("redis");
  }

  if (subdomain == "localhost") {
    url.searchParams.append("t", template);
    return rewrite(url, {
      headers: {
        "set-cookie": `template=${template}; path=/; max-age=31536000; HttpOnly`,
      },
    });
  }

  // prepend the subdomain to the request url
  // todo add search params
  url.pathname = `/website/${subdomain}${url.pathname}?&t=${template}`;

  console.log(url.pathname);
  // return the modified request
  return rewrite(url, {
    headers: {
      "set-cookie": `template=${template}; path=/; max-age=31536000; HttpOnly`,
    },
  });
}
