import websites from "./websites";
import products from "./products";
import wishes from "./wishes";

export default {
  websites: async () => websites,
  wiches: async (websiteId: string) =>
    wishes.filter((w) => w.product.website === websiteId),
  products: async (websiteId?: string) =>
    products.filter((p) => p.website === websiteId),
};
