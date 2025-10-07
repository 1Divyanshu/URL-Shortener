import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("Shortify")
    const collection = db.collection("feedback")

    const result = await collection.insertOne({
        name: body.name,
        email: body.email,
        msg : body.message
    })


    return Response.json({ success: true, error: false, message: 'feedback submitted successfully ' })
}