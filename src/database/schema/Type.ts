import { Document, Schema } from "mongoose";
import { RefMove, RefMoveSchema, RefPokemon, RefPokemonSchema } from "./Shared";

export interface PokemonType extends Document {
  damageClass: string;
  doubleDamageFrom: string[];
  doubleDamageTo: string[];
  halfDamageFrom: string[];
  halfDamageTo: string[];
  id: number;
  moves: RefMove[];
  name: string;
  noDamageFrom: string[];
  noDamageTo: string[];
  pokemon: RefPokemon[];
}

const TypeSchema: Schema<PokemonType> = new Schema({
  damageClass: String,
  doubleDamageFrom: [String],
  doubleDamageTo: [String],
  halfDamageFrom: [String],
  halfDamageTo: [String],
  id: Number,
  moves: [RefMoveSchema],
  name: String,
  noDamageFrom: [String],
  noDamageTo: [String],
  pokemon: [RefPokemonSchema],
});

export default TypeSchema;
