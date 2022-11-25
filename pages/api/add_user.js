import prisma from "../../lib/prisma";

export default async function addUser(req, res) {
  const { name, email } = req.body;
  const query = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  res.status(200).send(query);
}
