export default async function addUser(req, res) {
  //const body = '{"name":"John", "email":"sdsdsdss@dd.com", "image":"dsdasdas"}';
  const data = JSON.parse(req.body);
  const query = await prisma.user.create({ data });
  res.status(200).send(query);
}
