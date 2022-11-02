"use client";

import Image from "next/image";
import { FunctionComponent, use } from "react";
import data from "../../../data";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  const products = use(data.products("1"));

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
            {" "}
            {product.description.slice(0, 30)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
