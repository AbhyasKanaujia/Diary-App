const express = require("express");
const { errorHandler } = require("./middleware/errorHandler.js");
const entryRouter = require("./routes/entryRoutes.js");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

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
