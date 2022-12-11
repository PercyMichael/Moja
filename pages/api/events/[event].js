import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
//MONGODB_URI='mongodb+srv://maja06312:kREjkacdc3iipe2X@mojaone.ivpedyz.mongodb.net/mojaOneDb'
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const event_id = req.query.event;
      const client = await clientPromise;
      const db = client.db("mojaOneDb");

      const movies = await db
        .collection("events")
        .findOne({ _id: ObjectId(event_id) });
      //console.log(event_id);

      return res.status(200).json(movies);
    } catch (e) {
      console.error(e);
    }
  } else {
    return res.status(400).send("error");
  }
}
