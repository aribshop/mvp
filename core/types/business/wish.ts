import Product from "./product";

export default interface Wish {
  id: string;
  group: string; // represent a key that groups multiple wishes
  product: Product;
  date: Date;
  user: string;
}
