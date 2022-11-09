const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware.js");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController.js");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
