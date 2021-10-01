import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export default async function handler(req, res) {
  const { id } = req.query;
  const product = await client.product.findUnique({
    where: {
      id: parseInt(id, 10)
    }
  });
  res.status(200).json(product);
}
