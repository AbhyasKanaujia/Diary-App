const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorHandler.js");
const entryRouter = require("./routes/entryRoutes.js");
require("dotenv").config();
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/entries", entryRouter);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
