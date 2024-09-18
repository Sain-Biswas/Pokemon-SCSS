import dbConnect from "@/database/db";
import SingleMoveModel from "@/database/models/SingleMove";
import { NextRequest, NextResponse } from "next/server";

interface RouteContext {
  params: {
    moveID: string;
  };
}

export async function GET(
  request: NextRequest,
  { params: { moveID } }: RouteContext
) {
  await dbConnect();
  const moveId = Number.parseInt(moveID);

  const move = await SingleMoveModel.find({}, { _id: 0 })
    .where("id")
    .equals(moveId);

  return NextResponse.json(move[0]);
}
