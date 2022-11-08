import type { NextApiRequest, NextApiResponse } from "next";
import Website from "../../../core/types/business/website";
import { DB } from "../../../repositories/firestore";

type Data =
  | {
      websites: Website[];
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

  const websites = await DB.collection("/websites").get();
  res.send({
    websites: websites.docs.map((website) => {
      return {
        id: website.id,
        ...website.data(),
      } as Website;
    }),
  });
}
