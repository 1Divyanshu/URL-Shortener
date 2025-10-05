import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("Shortify");
    const collection = db.collection("urls");

    // Fetch all entries
    const entries = await collection.find({}).toArray();

    // Return JSON
    return new Response(JSON.stringify(entries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch links" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await client.close();
  }
}
