export default function middleware(request: Request) {
  const url = new URL(request.url);

  // extract the subdomain from the request
  const subdomain = url.hostname.split(".")[0];
  // prepend the subdomain to the request url
  url.pathname = `/website/${subdomain}${url.pathname}`;

  console.log(url.pathname);
  // return the modified request
  return Response.redirect(url);
}
