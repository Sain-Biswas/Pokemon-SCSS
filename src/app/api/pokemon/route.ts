import dbConnect from "@/database/db";
import PokemonListModel from "@/database/models/PokemonList";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const pokemon = await PokemonListModel.find({}, { _id: 0 }).sort("asc");

  return NextResponse.json(pokemon);
}
