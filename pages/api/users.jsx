import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");

      const movies = await db
        .collection("comments")
        .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();
      const len = movies.length;

      res.status(200).send(len);
    } catch (e) {
      console.error(e);
    }
  } else {
    res.status(400).send("error");
  }
}
