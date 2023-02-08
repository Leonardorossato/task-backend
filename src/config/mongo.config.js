const mongoose = require("mongoose");

const mongooseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    if (!connection) return { message: "Connection to mongoose failed" };
    return { message: "Connection to mongoose Successfully" };
  } catch (error) {
    return { message: "Error connecting to mongoDB", error };
  }
};

module.exports = mongooseConnection;
