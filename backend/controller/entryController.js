// @desc    Get all entries
// @route   GET /api/entries
// @access  Private
const getEntries = (req, res) => {
  res.status(200).json({ message: "get entry" });
};

// @desc    Create an entry
// @route   POST /api/entries
// @access  Private
const createEntry = (req, res) => {
  res.status(201).json({ message: "Add entry" });
};

// @desc    Update an entry
// @route   PUT /api/entries/:id
// @access  Private
const updateEntry = (req, res) => {
  res.status(200).json({ message: `Update entry id ${req.params.id}` });
};

// @desc    Delete an entry
// @route   DELETE /api/entries/:id
// @access  Private
const deleteEntry = (req, res) => {
  res.status(200).json({ message: `Delete entry id ${req.params.id}` });
};

module.exports = {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
