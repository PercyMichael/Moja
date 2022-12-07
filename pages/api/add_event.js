import clientPromise from "../../lib/mongodb";

export default async function addUser(req, res) {
  //const body =
  '{"event_title":"Ladys Night","date":"Feb.30,2900","ticket_price":2300,"likes":120,"location":"Kololo ,Strip"}';
  //const data = JSON.parse(req.body);
  const data = JSON.parse(req.body);

  const client = await clientPromise;
  const db = client.db("mojaOneDb");

  const query = await db.collection("events").insertOne(data);
  if (query.acknowledged) {
    return res.status(200).send(query);
  } else {
    return res.status(200);
  }
}
