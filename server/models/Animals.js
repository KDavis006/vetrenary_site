import mongoose from "mongoose";
const { Schema } = mongoose;

const animalSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide name"],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    pet: {
      type: Boolean,
      required: true,
      default: false,
    },
    size: {
      type: String,
      required: true,
      enum: ["small", "medium", "large"],
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Store the URL of the image in Cloudinary
      required: true,
    },
  },
  { collection: "Animals" }
);

export default animalSchema;
