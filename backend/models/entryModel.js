const mongoose = require("mongoose");

const entrySchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Entry", entrySchema);
