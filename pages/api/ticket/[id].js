import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
//MONGODB_URI='mongodb+srv://maja06312:kREjkacdc3iipe2X@mojaone.ivpedyz.mongodb.net/mojaOneDb'
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const ticket_id = req.query.id;
      const client = await clientPromise;
      const db = client.db("mojaOneDb");

      const ticket = await db
        .collection("tickets")
        .findOne({ _id: ObjectId(ticket_id) });
      //console.log(ticket_id);

      return res.status(200).json(ticket);
    } catch (e) {
      console.error(e);
    }
  } else {
    return res.status(400).send("error");
  }
}
