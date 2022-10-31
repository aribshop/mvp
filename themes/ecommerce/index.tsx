import { FunctionComponent } from "react";
import ITemplate from "../../core/types/itemplate";
import Image from "next/image";
import Product from "../../core/types/business/product";
import ProductCommerce from "./componenets/product";

interface EcommerceTemplateProps extends ITemplate {
  products: Product[];
}

const EcommerceTemplate: FunctionComponent<EcommerceTemplateProps> = (
  props
) => {
  const { products } = props;
  return (
    <div className="w-screen min-h-full bg-slate-500">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-6xl font-bold text-white">{props.title}</h1>
          <p className="text-2xl text-white">{props.description}</p>
          <h2 className="">Ecommerce</h2>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCommerce key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceTemplate;
