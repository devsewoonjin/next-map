// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StoreType } from "@/interface";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreType[]>
) {
  const prisma = new PrismaClient();
  const stores = await prisma.store.findMany();
  // 목업데이터는 이런식으로 활용
  // const stores = (await import("../../data/store_data.json"))[
  //   "DATA"
  // ] as StoreType[];
  res.status(200).json(stores);
}
