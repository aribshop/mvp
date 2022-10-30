import { FunctionComponent } from "react";

interface ProductProps {
  params: { slug: string };
}

const Product: FunctionComponent<ProductProps> = (props) => {
  return <div>{props.params.slug}</div>;
};

export default Product;
