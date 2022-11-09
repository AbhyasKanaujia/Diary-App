const asyncHandler = require("express-async-handler");

// @desc    Register new userr
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register user" });
});

// @desc    Authenticate user
// @route   POST /api/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display " });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
