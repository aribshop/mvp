const API = (location: string) => {
  return process.env.ARIB_API + location;
};

export async function getStandarPorducts(subname: string) {
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

  const standarPorducts = products.filter((p: any) => !p.isCustom);

  return standarPorducts as {
    id: string;
    picture: string;
    price: number;
    metadata: {
      name: string;
      description: string;
    };
  }[];
}

export async function getProduct(subname: string, productID: string) {
  const response = await fetch(API(`/site/product/${subname}/${productID}`));

  const data = await response.json();
  console.log("ARIB_API", API(`/site/product/${subname}/${productID}`));

  return data.product as {
    id: string;
    price: number;
    picture: string;

    metadata: {
      name: string;
      description: string;
    };
  };
}
