import mongoose from "mongoose";
import SinglePokemonSchema from "../schema/SinglePokemon";

const SinglePokemonModel =
  mongoose.models?.SinglePokemon ||
  mongoose.model("SinglePokemon", SinglePokemonSchema, "SinglePokemon");

export default SinglePokemonModel;
