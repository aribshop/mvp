import data from "../data";

export async function getWebsite(subdomain: string) {
  await new Promise((res) => setTimeout(res, Math.random() * 3000));

  const websites = await data.websites();

  return websites.find((w) => (w.subname == subdomain));
}
