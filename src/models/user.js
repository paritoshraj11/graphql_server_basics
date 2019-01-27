import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: String,
  gender: String,
  items: [
    {
      //creating reference to the others schema
      ref: "Item",
      type: Schema.Types.ObjectId,
      required: true
    }
  ]
});

export default mongoose.model("user", UserSchema);
