import mongoose from "mongoose";
import TypeSchema from "../schema/Type";

const TypeModel =
  mongoose.models?.Types || mongoose.model("Types", TypeSchema, "Types");

export default TypeModel;
