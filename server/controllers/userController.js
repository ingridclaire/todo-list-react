const User = require('../models/User');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = User.find({ email });
    if (existingUser) {
      throw new Error('A user with that email already exists.')
    }
    // TODO: encrypt password
    await User.create({email, password});

    res.status(201).json({ message: 'Account created!' });

  } catch (err) {
    res.json(err);
  }

}
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = User.find({ email });
    if (!existingUser) {
      throw new Error('There is no user with that email.')
    }
    // TODO: use bcrypt to compare passwords
    if (existingUser.password !== password) {
      throw new Error('Invalid credentials!')
    }

    res.status(201).json({ message: 'Successfully logged in!' })

  } catch (err) {
    res.json(err);
  }

}



module.exports = { registerUser, loginUser }