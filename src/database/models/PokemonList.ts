import mongoose from "mongoose";
import PokemonListSchema from "../schema/PokemonList";

const PokemonListModel =
  mongoose.models?.PokemonList ||
  mongoose.model("PokemonList", PokemonListSchema, "PokemonList");

export default PokemonListModel;
