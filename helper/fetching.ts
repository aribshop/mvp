import Product from "../core/types/business/product";
import { ProductTemplates } from "../core/types/itemplate";
import data from "../data";

const delay = () => new Promise((res) => setTimeout(res, Math.random() * 3000));

export async function getWebsite(subdomain: string) {
  await delay();
  const websites = await data.websites();

  return websites.find((w) => w.subname == subdomain);
}

export async function getProduct(websiteId: string, id: string) {
  await delay();

  const products = await data.products(websiteId);

  return products.find((p) => p.id == id);
}

export function isOnePageProduct(product: Product) {
  return (
    product.template == ProductTemplates.Landing ||
    product.template == ProductTemplates.WithSuggestions
  );
}
