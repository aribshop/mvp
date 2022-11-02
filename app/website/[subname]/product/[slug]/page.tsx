import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import {
  getProduct,
  getWebsite,
  isOnePageProduct,
} from "../../../../../helper/fetching";
import ThemeProduct from "../../../../../themes/themeProduct";

interface ProductProps {
  params: { slug: string; subname: string };
}

const Product = async (props: ProductProps) => {
  const subname = props.params.subname;
  const website = (await getWebsite(subname))!;

  const product = (await getProduct(website.id, props.params.slug))!;

  // todo the role of the website to decide if it is a one page product or not
  if (isOnePageProduct(product)) {
    return <ThemeProduct website={website} product={product} />;
  } else return redirect("..");
};

export default Product;
