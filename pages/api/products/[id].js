import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export default async function handler(req, res) {
  const { id } = req.query;
  let productId = parseInt(id, 10) ? NaN : 0;
  console.log(id);
  const product = await client.product.findUnique({
    where: {
      id: 23
    }
  });
  res.status(200).json(product);
}
