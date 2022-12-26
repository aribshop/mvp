import { API } from "../../utils/backdata";

export async function getFirstCustomProduct(subname: string) {
  const response = await fetch(
    `${process.env.ARIB_API}/site/products/${subname}`,
    {
      next: {
        revalidate: 800,
      },
    }
  );
  const data = await response.json();
  const { products } = data;

  const product = products.filter((p: any) => p.isCustom)[0];

  return product as {
    id: string;
    metadata: {
      name: string;
    };
  };
}

export async function getProduct(subname: string, productID: string) {
  const response = await fetch(API(`/site/product/${subname}/${productID}`));

  const data = await response.json();
  console.log("ARIB_API", API(`/site/product/${subname}/${productID}`));

  return data.product as {
    id: string;
    metadata: {
      name: string;
    };
  };
}
