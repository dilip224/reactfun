import mongoose from "mongoose";

const schema = mongoose.Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  gender: { type: String, required: true, trim: true },
  age: { type: String, required: true, trim: true },
  photo: { type: String, required: true, trim: true },
  doc: { type: String, required: true, trim: true },
  join: { type: Date, default: new Date() },
});

const Model = mongoose.model("User", schema);
export default Model;
