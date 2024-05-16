const cloudinary = require('../cloudinaryConfig')
const Animal = require('../models/Animals');

const addAnimal = async (req, res) => {
  try {
    const { name, dateOfBirth, gender, pet, size, description } = req.body;
    const image = req.file.path; // assuming you're using multer or similar for file uploads

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.v2.uploader.upload(image, {
      folder: 'animal_images', // Optional folder in Cloudinary
      // Other options like cropping, resizing, etc.
    });

    const newAnimal = new Animal({
      name,
      dateOfBirth,
      gender,
      pet,
      size,
      description,
      image: uploadedImage.secure_url, // Store the secure URL of the uploaded image
    });

    const savedAnimal = await newAnimal.save();
    res.status(201).json(savedAnimal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    // Check if image is updated
    if (req.file) {
      const image = req.file.path;
      const uploadedImage = await cloudinary.v2.uploader.upload(image, {
        folder: 'animal_images', // Optional folder in Cloudinary
        // Other options like cropping, resizing, etc.
      });
      newData.image = uploadedImage.secure_url;
    }

    const updatedAnimal = await Animal.findByIdAndUpdate(id, newData, { new: true });

    if (!updatedAnimal) {
      return res.status(404).json({ error: "Animal not found" });
    }

    res.json(updatedAnimal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeAnimal = async (req, res) => {
  try {
    const { id } = req.params;

    const removedAnimal = await Animal.findByIdAndRemove(id);

    if (!removedAnimal) {
      return res.status(404).json({ error: "Animal not found" });
    }

    res.json(removedAnimal);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);

    if (!animal) {
      return res.status(404).json({ error: "Animal not found" });
    }

    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {getAllAnimals, editAnimal, addAnimal, removeAnimal, getAnimal};