import dbConnect from "@/database/db";
import MoveListModel from "@/database/models/MoveList";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const move = await MoveListModel.find({}, { _id: 0 });

  return NextResponse.json(move);
}
