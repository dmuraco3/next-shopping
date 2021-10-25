import { PrismaClient } from "@prisma/client";

const Client = new PrismaClient();

export default async function handler(req, res) {
  const reqqe = req.query
  const clothes = await Client.product.findMany({
    take: parseInt(reqqe.pageLength, 10),
    skip: parseInt(reqqe.pointer, 10),
    where: {
      gender: "MALE"
    }
  })
  res.status(200).json(clothes);
}
