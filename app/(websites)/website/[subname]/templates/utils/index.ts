export function Href(subname: string, template: string) {
    if (process.env.NODE_ENV == "development") {
      const prefix = `/website/${subname}/templates/${template}/`;
      return (x: string) => prefix + "/" + x;
    }
    return (x: string) => x;
  }
  