const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb://localhost:27017/CRM", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" Database connected. ");
  } catch (error) {
    console.error(" Failed to connect to database ", error);
    process.exit(1);
  }
};

module.exports = connectDB;