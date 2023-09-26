const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  console.log('env string ============', process.env.MONGODB_URI)
  try{
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    })
    console.log("MongoDB Connected!")
  } catch (error) {
    console.error("Error connecting to DB", error)
  }

}

module.exports = connectDB;