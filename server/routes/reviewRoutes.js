// /server/routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { reviewCode } = require("../controllers/reviewController");

router.post("/", protect, reviewCode);

module.exports = router;