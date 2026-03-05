import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, city, collection } = body;

    if (!name || !phone || !email || !city || !collection) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("mmfashion");

    await db.collection("leads").insertOne({
      name,
      phone,
      email,
      city,
      collection,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Lead saved successfully" },
      { status: 200 }
    );

  } catch (error) {
  console.error("LEAD API ERROR:");
  console.error(error);

  return NextResponse.json(
    { message: error?.message || "Server Error" },
    { status: 500 }
  );
}
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mmfashion");

    const count = await db.collection("leads").countDocuments();

    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching count" },
      { status: 500 }
    );
  }
}