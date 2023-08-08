import mongoose from "mongoose";

const User:any = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "user-data" }
);

const userModal = mongoose.model("UserData", User);

export { userModal };
