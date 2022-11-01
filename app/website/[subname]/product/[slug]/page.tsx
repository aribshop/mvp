import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import {
  getProduct,
  getWebsite,
  isOnePageProduct,
} from "../../../../../helper/fetching";

interface ProductProps {
  params: { slug: string; subname: string };
}

const Product = async (props: ProductProps) => {
  const subname = props.params.subname;
  const website = (await getWebsite(subname))!;

  const product = (await getProduct(website.id, props.params.slug))!;

  if (isOnePageProduct(product)) {
    return (
      <div className="max-w-md mx-auto  bg-neutral-100 rounded-lg shadow-md p-8">
        <h1 className="text-3xl text-center">{product.name}</h1>
        <p className="text-zinc-800 text-xl mt-4">{product.description}</p>
      </div>
    );
  } else redirect("..");
};

export default Product;
