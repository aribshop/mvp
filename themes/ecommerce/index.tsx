import { FunctionComponent } from "react";
import ITemplate from "../../core/types/itemplate";
import Image from "next/image";
import Product from "../../core/types/business/product";

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
              <div
                key={product.id}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg"
              >
                <div className="w-32 h-32">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={128}
                    height={128}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceTemplate;
