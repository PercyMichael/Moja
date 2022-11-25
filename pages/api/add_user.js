import prisma from "../../lib/prisma";

export default async function addUser(req, res) {
  const query = await prisma.user.create({
    data: {
      name: "amen",
      email: "amon@rent-dashy.com",
    },
  });
  res.status(200).send(query);
}
