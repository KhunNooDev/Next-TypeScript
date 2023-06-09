// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/database/db";
import Product, { IProduct } from "@/utils/database/models/Product";

type Data = {
  success: boolean;
  data?: IProduct | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    query: { id }, // Retrieve the ID from the query parameters
  } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        // Find the product by its ID
        const product = await Product.findById(id);
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false, data: null });
      break;
  }
}
