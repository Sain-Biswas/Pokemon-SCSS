import dbConnect from "@/database/db";
import TypeModel from "@/database/models/Type";
import { NextRequest, NextResponse } from "next/server";

interface RouteContext {
  params: {
    typeName: string;
  };
}

export async function GET(
  request: NextRequest,
  { params: { typeName } }: RouteContext
) {
  await dbConnect();

  const ref =
    typeName.charAt(0).toUpperCase() + typeName.slice(1).toLowerCase();

  const type = await TypeModel.find({}, { _id: 0 }).where("name").equals(ref);

  return NextResponse.json(type[0]);
}
