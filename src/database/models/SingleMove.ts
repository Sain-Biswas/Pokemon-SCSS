import mongoose from "mongoose";
import SingleMoveSchema from "../schema/SingleMove";

const SingleMoveModel =
  mongoose.models?.SingleMove ||
  mongoose.model("SingleMove", SingleMoveSchema, "SingleMove");

export default SingleMoveModel;
