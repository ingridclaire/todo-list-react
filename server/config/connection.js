const mongoose = require('mongoose');

const connectDB = async () => {
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