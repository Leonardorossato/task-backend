const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoConnection = require("./config/mongo.config");

app.mongoConnection = mongoConnection;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
