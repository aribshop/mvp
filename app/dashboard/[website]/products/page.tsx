import Image from "next/image";
import { FunctionComponent, use } from "react";
import Product from "../../../../core/types/business/product";
import data from "../../../../data";
import AddProduct from "./components/addProduct";

interface ProductsProps {
  params: {
    website: string;
  };
}

const Products = async (props: ProductsProps) => {
  const { products } = (await (
    await fetch(
      `http://127.0.0.1:3000/api/website/${props.params.website}/product/get`
    )
  ).json()) as { products: Product[] };

  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div className="bg-neutral-500 rounded-md shadow-md border-neutral-200 overflow-hidden">
          <Image
            className="w-full "
            src={product.image}
            alt={product.name}
            width="50"
            height="50"
          />

          <h1 className="font-bold text-lg">
            {product.name} - <span className="font-mono">${product.price}</span>
          </h1>

          <p className="text-neutral-700 ">
            {product.description.slice(0, 30)}
          </p>
        </div>
      ))}
      <AddProduct websiteId={props.params.website} />
    </div>
  );
};

export default Products;
