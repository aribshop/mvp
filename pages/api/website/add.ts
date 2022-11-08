import type { NextApiRequest, NextApiResponse } from "next";

import { DB } from "../../../repositories/firestore";

type Data =
  | {
      success: true;
      subname: string;
      id: string;
    }
  | {
      success: false;
      error: string;
      domainExists?: boolean;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method != "POST")
    return res.send({
      success: false,
      error: "Invalid method",
    });

  const { subname, type, title } = req.body;

  if (!subname || !type || !title)
    return res.send({
      success: false,
      error: "Missing fields",
    });

  // Check if domain exists
  // If it does, return error
  // If it doesn't, create it

  const doc = await DB.collection("websites").add({
    subname,
    type,
    title,
  });

  res.send({
    success: true,
    subname,
    id: doc.id,
  });
}
