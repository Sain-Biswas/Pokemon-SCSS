import dbConnect from "@/database/db";
import SinglePokemonModel from "@/database/models/SinglePokemon";
import { NextRequest, NextResponse } from "next/server";

interface RouteContext {
  params: {
    pokemonID: string;
  };
}

export async function GET(
  request: NextRequest,
  { params: { pokemonID } }: RouteContext
) {
  await dbConnect();
  const pokemonId = Number.parseInt(pokemonID);

  const pokemon = await SinglePokemonModel.find({}, { _id: 0 })
    .where("id")
    .equals(pokemonId);

  return NextResponse.json(pokemon[0]);
}
