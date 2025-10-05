import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request) {
  const body = await request.json()
  const client = await clientPromise
  const db = client.db("Shortify")
  const collection = db.collection("urls")
  const counter = db.collection("stats")

  const doc = await collection.findOne({ shorturl: body.shorturl })
  if (doc) {
    return Response.json({ success: false, error: true, message: 'Short URL already exists' })
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  })

  await db.collection("stats").updateOne(
    { _id: "totalLinks" },
    { $inc: { count: 1 } },
    { upsert: true }
  );


  return Response.json({ success: true, error: false, message: 'URL Generated successfully ' })
}


export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("Shortify");
    const statsCollection = db.collection("stats");

    const statsDoc = await statsCollection.findOne({ _id: "totalLinks" });

    if (!statsDoc) {
      return NextResponse.json({ success: true, count: 0 });
    }

    return NextResponse.json({ success: true, count: statsDoc.count });

  } catch (error) {
    console.error("Failed to fetch stats:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}