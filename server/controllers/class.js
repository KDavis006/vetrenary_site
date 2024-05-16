const cloudinary = require('../cloudinaryConfig')
const Class = require('../models/Class');

const addClass = async (req, res) => {
  try {
    const { name, year, homeschool, isTeacherClass } = req.body;
    const image = req.file.path;

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.v2.uploader.upload(image, {
      folder: 'class_images', // Optional folder in Cloudinary
      // Other options like cropping, resizing, etc.
    });

    const newClass = new Class({
      name,
      year,
      homeschool,
      image: uploadedImage.secure_url, // Store the secure URL of the uploaded image
      isTeacherClass,
    });

    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editClass = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    // Check if image is updated
    if (req.file) {
      const image = req.file.path;
      const uploadedImage = await cloudinary.v2.uploader.upload(image, {
        folder: 'class_images', // Optional folder in Cloudinary
        // Other options like cropping, resizing, etc.
      });
      newData.image = uploadedImage.secure_url;
    }

    const updatedClass = await Class.findByIdAndUpdate(id, newData, { new: true });

    if (!updatedClass) {
      return res.status(404).json({ error: "Class not found" });
    }

    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeClass = async (req, res) => {
  try {
    const { id } = req.params;

    const removedClass = await Class.findByIdAndRemove(id);

    if (!removedClass) {
      return res.status(404).json({ error: "Class not found" });
    }

    res.json(removedClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getClass = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {getClass, addClass, editClass, removeClass}