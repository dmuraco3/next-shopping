import { PrismaClient } from "@prisma/client";

const Client = new PrismaClient();

export default async function handler(req, res) {
  const manlyClothes = await Client.product.findMany({
    where: {
      visibility: "FEATURED",
      category: {
        name: "shirt"
      }
    }
  });
  console.log(manlyClothes);
  res.status(200).json(manlyClothes);
}
