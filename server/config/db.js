"use strict";

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DATABASE)
    console.log("Database connection successful!")
  } catch (err) {
    console.log(`Can't connect to DB! Error: ${err}`)
  }
};

module.exports = connectDB