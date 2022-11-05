const asyncHandler = require("express-async-handler");
const Entry = require("../models/entryModel.js");

// @desc    Get all entries
// @route   GET /api/entries
// @access  Private
const getEntries = asyncHandler(async (req, res) => {
  const entries = await Entry.find();

  res.status(200).json(entries);
});

// @desc    Create an entry
// @route   POST /api/entries
// @access  Private
const createEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.create({
    title: req.body.title,
    content: req.body.content,
  });

  res.status(201).json(entry);
});

// @desc    Update an entry
// @route   PUT /api/entries/:id
// @access  Private
const updateEntry = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update entry id ${req.params.id}` });
});

// @desc    Delete an entry
// @route   DELETE /api/entries/:id
// @access  Private
const deleteEntry = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete entry id ${req.params.id}` });
});

module.exports = {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
