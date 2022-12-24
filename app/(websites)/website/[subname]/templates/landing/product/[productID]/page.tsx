import { getFirstCustomProduct, getProduct } from "../../utils/backdata";

type props = {
  params: {
    productID: string;
    subname: string;
  };
};

export default async function Product({ params }: props) {
  const product = await getProduct(params.subname, params.productID);

  return (
    <div>
      <h1>{product.metadata.name}</h1>
    </div>
  );
}
