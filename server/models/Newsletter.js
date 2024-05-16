const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsletterSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // Store the URL of the image in Cloudinary
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { collection: "Newsletter" }
);

export default newsletterSchema;
