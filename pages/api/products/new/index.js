import {PrismaClient} from '@prisma/client';

const client = new PrismaClient();

export default async function handler(req, res) {
    const products = await client.product.findMany({
        take: 8,
        where: {
            visibility: "FEATURED"
        }
    })

    res.status(200).json(products)
}