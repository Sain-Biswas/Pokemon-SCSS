import mongoose from "mongoose";
import MoveListSchema from "../schema/MoveList";

const MoveListModel =
  mongoose.models?.MoveList ||
  mongoose.model("MoveList", MoveListSchema, "MoveList");

export default MoveListModel;
