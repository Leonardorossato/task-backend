const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected with MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
