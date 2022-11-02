import { FunctionComponent } from "react";
import Product from "../core/types/business/product";
import Website from "../core/types/business/website";
import { Templates } from "../core/types/itemplate";
import EcommerceProductLanding from "./ecommerce/views/productLanding";
import DentistProductLanding from "./dentist/views/productLanding";

interface ThemeProductProps {
  website: Website;
  product: Product;
}

const ThemeProduct = (props: ThemeProductProps) => {
  const { website, product } = props;

  if (website.template === Templates.Ecommerce) {
    return <EcommerceProductLanding product={product} />;
  } else if (website.template === Templates.Dentist) {
    return <DentistProductLanding product={product} />;
  } else return <div>Website not found</div>;
};

export default ThemeProduct;
