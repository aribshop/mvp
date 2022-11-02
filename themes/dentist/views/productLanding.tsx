import { FunctionComponent } from "react";
import Product from "../../../core/types/business/product";

interface ProductLandingProps {
  product: Product;
}

const ProductLanding: FunctionComponent<ProductLandingProps> = ({
  product,
}) => {
  return (
    <div className="absolute flex items-center justify-center inset-0 z-50 backdrop-blur-sm bg-black/25">
      <div className="max-w-md h-72 bg-white rounded-md">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
