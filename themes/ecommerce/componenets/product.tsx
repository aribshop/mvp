import { FunctionComponent } from "react";
import Product from "../../../core/types/business/product";

import Image from "next/image";
import Link from "next/link";

interface CommerceProductProps {
  product: Product;
}

const ProductCommerce: FunctionComponent<CommerceProductProps> = ({
  product,
}) => {
  return (
    <Link
      href={`website/amazon/product/${product.id}`}
      className="flex flex-col items-center justify-center hover:shadow-2xl p-4 bg-white rounded-lg shadow-lg"
    >
      <div className="w-32 h-32">
        <Image
          src={product.image}
          alt={product.name}
          width={128}
          height={128}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </Link>
  );
};

export default ProductCommerce;
