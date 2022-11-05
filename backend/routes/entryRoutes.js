const express = require("express");
const router = express.Router();

const {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("../controllers/entryController.js");

router.route("/").get(getEntries).post(createEntry);
router.route("/:id").put(updateEntry).delete(deleteEntry);

module.exports = router;
