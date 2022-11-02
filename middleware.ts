import { rewrite } from "@vercel/edge";
import { hostname } from "os";

export const config = {
  // Only run the middleware on the home route
};

export default function middleware(request: Request) {
  const url = new URL(request.url);

  // check if the url is Next specific and rewrite it
  const subdomain = url.hostname.split(".")[0];

  console.log("CC" + url.hostname);

  if (subdomain === "dashboard") {
    url.pathname = `/dashboard/${url.pathname}`;
  }

  if (url.pathname.startsWith("/_next") || subdomain == "localhost") {
    return rewrite(url);
  }

  // prepend the subdomain to the request url
  url.pathname = `/website/${subdomain}${url.pathname}`;

  console.log(url.pathname);
  // return the modified request
  return rewrite(url);
}
