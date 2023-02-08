const express = require("express");
const mongooseConnection = require("./config/mongo.config");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const taksRouter = require("./routes/task.route");

app.use(express.json());

app.use("/api/tasks", taksRouter);

app.listen(mongooseConnection);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
