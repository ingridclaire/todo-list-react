const User = require('../models/User');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('registerUser | ln 5: ', req.body)
  try {
    // check to see if there's already a user with the provided email
    const existingUser = await User.findOne({ email }); // returns null
    console.log('existingUser+++++++++++++++++', existingUser)
    // check if that "found user" is truthy (not null or undefined)
    if (existingUser) {
      console.log('user already exists -----------------------')
      throw new Error('A user with that email already exists.')
    } else {
      // TODO: encrypt password
      await User.create({email, password});
  
      res.status(201).json({ message: 'Account created!' });

    }

  } catch (err) {
    res.json(err);
  }

}
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('loginUser | ln 26: ', req.body)
  try {
    const existingUser = await User.findOne({ email });
    console.log("user from db: ",existingUser)
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