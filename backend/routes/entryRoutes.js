const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get entries" });
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Add entry" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update entry id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete entry id ${req.params.id}` });
});

module.exports = router;
