import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  text: {
    type: String
  },
  title: {
    type: String,
    required: true
  }
});

export default mongoose.model("Item", ItemSchema);
