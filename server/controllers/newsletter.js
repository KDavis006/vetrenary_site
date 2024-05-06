import cloudinary from '../cloudinaryConfig';
import Newsletter from '../models/Newsletter';

const addEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const image = req.file.path;

    // Upload image to Cloudinary
    const uploadedImage = await cloudinary.v2.uploader.upload(image, {
      folder: 'newsletter_images', // Optional folder in Cloudinary
      // Other options like cropping, resizing, etc.
    });

    const newEvent = new Newsletter({
      title,
      description,
      image: uploadedImage.secure_url, // Store the secure URL of the uploaded image
      date,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    // Check if image is updated
    if (req.file) {
      const image = req.file.path;
      const uploadedImage = await cloudinary.v2.uploader.upload(image, {
        folder: 'newsletter_images', // Optional folder in Cloudinary
        // Other options like cropping, resizing, etc.
      });
      newData.image = uploadedImage.secure_url;
    }

    const updatedEvent = await Newsletter.findByIdAndUpdate(id, newData, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const removedEvent = await Newsletter.findByIdAndRemove(id);

    if (!removedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(removedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await Newsletter.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {getAllNews, editEvent, addEvent, removeEvent}