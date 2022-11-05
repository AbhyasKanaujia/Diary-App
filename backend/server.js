const express = require("express");
const entryRouter = require("./routes/entryRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/entries", entryRouter);

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
