const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoConnection = require("./config/mongo.config");
const taksRouter = require("./routes/task.route");

app.mongoConnection = mongoConnection;

app.use("/api/tasks", taksRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
