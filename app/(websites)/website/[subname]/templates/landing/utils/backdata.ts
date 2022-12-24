const API = (location: string) => {
  return (process.env.ARIB_API + location);
};

export async function getSite(subname: string) {
  const response = await fetch(API("/site/" + subname));
  const data = await response.json();

  return data.site;
}

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
  console.log(data,API(`/site/product/${subname}/${productID}`));

  return data.product as {
    id: string;
    metadata: {
      name: string;
    };
  };
}
