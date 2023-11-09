import mongoose from "mongoose";

export const User =
  mongoose.models.users ||
  mongoose.model(
    "users",
    new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    })
  );
