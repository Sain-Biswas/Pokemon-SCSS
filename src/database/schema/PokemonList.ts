import { Document, Schema } from "mongoose";

export interface PokemonList extends Document {
  id: number;
  name: string;
  types: string[];
}

const PokemonListSchema: Schema<PokemonList> = new Schema({
  id: Number,
  name: String,
  types: [String],
});

export default PokemonListSchema;
