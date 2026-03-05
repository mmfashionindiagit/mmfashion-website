import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("mmfashion");

  const leads = await db.collection("leads").find({}).toArray();

  const header = "Name,Phone,Email,City,Collection,Date\n";

  const rows = leads
    .map(
      (l) =>
        `${l.name},${l.phone},${l.email},${l.city},${l.collection},${l.createdAt}`
    )
    .join("\n");

  const csv = header + rows;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=leads.csv",
    },
  });
}