const User = require('../models/Person');

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, isAdmin, isTeacher } = req.body;
    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
      isAdmin,
      isTeacher,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findUser = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      isAdmin: user.isAdmin,
      isTeacher: user.isTeacher,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


module.exports = {findUser, createUser};