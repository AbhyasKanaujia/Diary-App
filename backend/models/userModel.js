const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [ture, "Please add a name"],
    },
    email: {
      type: String,
      required: [ture, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [ture, "Please add a password"],
    },
  },
  { timestamps: true }
);

model.exports = mongose.model("User", userSchema);
