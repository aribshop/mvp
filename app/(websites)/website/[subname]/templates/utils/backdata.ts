export const API = (location: string) => {
  return process.env.ARIB_API + location;
};

export async function getSite(subname: string) {
  console.time("ARIB-API:getSite");
  const response = await fetch(API("/site/" + subname));
  console.timeEnd("ARIB-API:getSite");
  const data = await response.json();

  return data.site as {
    name: string;
    template: {};
  };
}
