const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`mongodb + srv://biswadeepgiri48:EixhAjM2KorgF7zK@cluster0.wemoad7.mongodb.net/`);

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;


