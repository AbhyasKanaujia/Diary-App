const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middlewares/errorHandler.js");
const entryRouter = require("./routes/entryRoutes.js");
const userRouter = require("./routes/userRoutes.js");
require("dotenv").config();
const connectDB = require("./configs/db.js");

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/entries", entryRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
