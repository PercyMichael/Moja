import clientPromise from "../../lib/mongodb";
//#DATABASE_URL='mongodb+srv://maja06312:kREjkacdc3iipe2X@mojaone.ivpedyz.mongodb.net/mojaOneDb'
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("mojaOneDb");

      const movies = await db
        .collection("events")
        .findOne({ _id: ObjectId("638ddc34514ca8915298984d") });
      //const len = movies.length;

      res.status(200).json(movies);
    } catch (e) {
      console.error(e);
    }
  } else {
    res.status(400).send("error");
  }
}
