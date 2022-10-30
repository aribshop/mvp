import websites from "./websites";
import products from "./products";

export default {
  websites: async () => websites,
  products: async (websiteId?: string) =>
    products.filter((p) => p.website === websiteId),
};
