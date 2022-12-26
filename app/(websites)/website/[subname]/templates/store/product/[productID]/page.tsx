import AddToBucketButton from "../../components/addToBucketButton";
import OrderForm from "../../components/orderForm";
import { getProduct } from "../../utils/backdata";

type Props = {
  params: {
    subname: string;
    productID: string;
  };
};

export default async function Product(props: Props) {
  const product = await getProduct(
    props.params.subname,
    props.params.productID
  );

  return (
    <div className="flex items-stretch h-full w-full">
      <div className=" relative flex-1 bg-indigo-600 ">
        <img className="w-full " src={product.picture} />

        <div className="absolute top-0 left-0">
          <h3 className=" text-lg font-medium text-black py-2 px-4  bg-white">
            {product.metadata.name}
          </h3>
          <p className="font-medium text-black py-2 px-4  bg-white">
            {product.price}$
          </p>
        </div>
      </div>

      <div className="max-w-lg w-full p-4">
        <p className="text-gray-900 text-lg leading-relaxed">
          {product.metadata.description}
        </p>

        <OrderForm
          name={product.metadata.name}
          price={product.price}
          productID={product.id}
        />
      </div>
    </div>
  );
}
