import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const a = await prisma.User.findMany();
    res.status(200).json(a);
  } else {
    res.status(400).send("error");
  }
}
