import prisma from "../../lib/prisma";

export default async function addUser(req, res) {
  const data = JSON.parse(req.body);
  const query = await prisma.user.create({ data });
  res.status(200).send(query);
}
