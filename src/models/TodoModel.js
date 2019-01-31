import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  completed: Boolean,
  remindDate: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("todos", todoSchema);
