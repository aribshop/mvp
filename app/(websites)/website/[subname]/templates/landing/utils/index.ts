export function Href(subname: string) {
  if (process.env.NODE_ENV == "development") {
    const prefix = `/website/${subname}/templates/landing/`;
    return (x: string) => prefix + "/" + x;
  }
  return (x: string) => x;
}
