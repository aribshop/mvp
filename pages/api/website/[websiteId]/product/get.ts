import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../../../core/types/business/product";
import { ProductTemplates } from "../../../../../core/types/itemplate";

import { DB } from "../../../../../repositories/firestore";

type Data =
  | {
      products: Product[];
    }
  | {
      error: string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method != "GET")
    return res.send({
      error: "Invalid method",
    });

  const websiteId = req.query.websiteId as string;
  

  // check if the websiteId is not empty
  if (!websiteId)
    return res.send({
      error: "Invalid websiteId",
    });

  const products = await DB.collection(`/websites/${websiteId}/products`).get();
  
  res.send({
    products: products.docs.map((product) => {
      return {
        id: product.id,
        website: websiteId,
        template: ProductTemplates.Landing,
        ...product.data(),
      } as Product;
    }),
  });
}
