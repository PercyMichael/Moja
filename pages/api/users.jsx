export default async function handler(req, res) {
  if (req.method === "GET") {
    const a = await prisma.User.findMany({
      where: {
        OR: [{ image: null }, { image: "" }],
      },
    });
    res.status(200).json(a);
  } else {
    res.status(400).send("error");
  }
}
