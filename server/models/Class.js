const mongoose = require("mongoose");
const { Schema } = mongoose;

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Must provide name'],
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    homeschool: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Store the URL of the image in Cloudinary
      required: true,
    },
    isTeacherClass: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "Class" }
);

module.exports = classSchema;
