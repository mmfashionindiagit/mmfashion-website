import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mmfashion");

    const leads = await db
      .collection("leads")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const total = leads.length;

    const byCity = {};
    const byCollection = {};

    leads.forEach((lead) => {
      byCity[lead.city] = (byCity[lead.city] || 0) + 1;
      byCollection[lead.collection] =
        (byCollection[lead.collection] || 0) + 1;
    });

    return NextResponse.json({
      total,
      byCity,
      byCollection,
      leads,
    });

  } catch (error) {
  console.error("ADMIN LEADS ERROR:");
  console.error(error);

  return NextResponse.json(
    { message: error?.message || "Server Error" },
    { status: 500 }
  );
}
}