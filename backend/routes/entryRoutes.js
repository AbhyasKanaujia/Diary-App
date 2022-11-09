const express = require("express");
const { protect } = require("../middlewares/authMiddleware.js");
const router = express.Router();

const {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("../controllers/entryController.js");

router.route("/").get(protect, getEntries).post(protect, createEntry);
router.route("/:id").put(protect, updateEntry).delete(protect, deleteEntry);

module.exports = router;
