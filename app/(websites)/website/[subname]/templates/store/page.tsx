import { Href } from "../utils";
import { getStandarPorducts } from "./utils/backdata";

type Props = {
  params: {
    subname: string;
  };
};

export default async function Store(props: Props) {
  const h = Href(props.params.subname, "store");
  let products = await getStandarPorducts(props.params.subname);

  if (products.length == 1) {
    products = [products[0], products[0], products[0]];
  }
  if (products.length == 2) {
    products = [products[1], products[0], products[0]];
  }

  return (
    <div className="mt-4 flex">
      <div className=" relative bg-pink-700">
        <a href={h(`product/${products[0].id}`)}>
          <img className="w-full " src={products[0].picture} />
        </a>

        <div className="absolute top-0 left-0">
          <h3 className=" text-lg font-medium text-black py-2 px-4  bg-white">
            {products[0].metadata.name}
          </h3>
          <p className="font-medium text-black py-2 px-4  bg-white">
            {products[0].price}$
          </p>
        </div>
      </div>

      <div className="max-w-sm flex flex-col">
        <div className=" relative flex-1 bg-zinc-800">
          <a href={h(`product/${products[1].id}`)}>
            <img className="h-full " src={products[1].picture} />
          </a>
          <div className="absolute top-0 left-0">
            <h3 className=" text-lg font-medium text-black py-2 px-4  bg-white">
              {products[1].metadata.name}
            </h3>
            <p className="font-medium text-black py-2 px-4  bg-white">
              {products[1].price}$
            </p>
          </div>
        </div>

        <div className="relative flex-1 bg-pink-600">
          <a href={h(`product/${products[2].id}`)}>
            <img className="h-full  " src={products[2].picture} />
          </a>
          <div className="absolute top-0 left-0">
            <h3 className=" text-lg font-medium text-black py-2 px-4  bg-white">
              {products[2].metadata.name}
            </h3>
            <p className="font-medium text-black py-2 px-4  bg-white">
              {products[2].price}$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
