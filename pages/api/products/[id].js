import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export default async function handler(req, res) {
  const { id } = req.query;
  if(req.query.id !== "undefined") {
    const product = await client.product.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        related: true,
        relatedRelation: true
      }
    });
    res.status(200).json(product);

  } else {
    res.status(500).json({error: "internal server error"})
  }
}
