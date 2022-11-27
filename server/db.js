const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = "mongodb://127.0.0.1:27017/MovieApp";

const connectToMongo = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("Express.js: Connected to MongoDB");
  });
};

module.exports = connectToMongo;