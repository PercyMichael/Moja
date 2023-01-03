import clientPromise from "../../../lib/mongodb";
//#MONGODB_URI='mongodb+srv://maja06312:kREjkacdc3iipe2X@mojaone.ivpedyz.mongodb.net/mojaOneDb'
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;

      const db = client.db("mojaOneDb");

      const tickets = await db
        .collection("tickets")
        .find({})
        .limit(20)
        .toArray();
      //const len = movies.length;

      return res.status(200).json(tickets);
    } catch (e) {
      console.error(e);
    }
  } else {
    return res.status(400).send("error");
  }
}
