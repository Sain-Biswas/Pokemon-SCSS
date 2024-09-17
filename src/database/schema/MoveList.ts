import { Document, Schema } from "mongoose";

export interface MoveList extends Document {
  id: number;
  name: string;
  type: string;
  contestType: string;
  damageClass: string;
}

const MoveListSchema: Schema<MoveList> = new Schema({
  id: Number,
  name: String,
  type: String,
  contestType: String,
  damageClass: String,
});

export default MoveListSchema;
