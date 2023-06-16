// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/database/db";
import Flashcard, { IFlashcard } from "@/utils/database/models/Flashcard";

type Data = {
  success: boolean;
  data?: IFlashcard[] | IFlashcard;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const flashcard = await Flashcard.find({});
        res.status(200).json({ success: true, data: flashcard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const flashcard = await Flashcard.create(req.body);
        res.status(201).json({ success: true, data: flashcard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false, data: undefined });
      break;
  }
}
