import { ProductTemplates } from "../itemplate";

export default interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  website: string;
  template: ProductTemplates;
}
