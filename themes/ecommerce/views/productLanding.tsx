import { FunctionComponent } from "react";
import Product from "../../../core/types/business/product";

interface ProductLandingProps {
  product: Product;
}

const ProductLanding: FunctionComponent<ProductLandingProps> = ({
  product,
}) => {
  return <div>{product.name}</div>;
};

export default ProductLanding;
