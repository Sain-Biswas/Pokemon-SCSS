import dbConnect from "@/database/db";
import TypeModel from "@/database/models/Type";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const types = await TypeModel.find({}, { _id: 0 });

  return NextResponse.json(types);
}
