const jwt      = require("jsonwebtoken");
const User     = require("../models/User");
const asyncHandler = require("express-async-handler");

// ── Protect Route ─────────────────────────────────────────
// Yeh middleware check karta hai ki user logged in hai ya nahi
const protect = asyncHandler(async (req, res, next) => {

  let token;

  // Token header mein hai?
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Token lo
      token = req.headers.authorization.split(" ")[1];

      // Token verify karo
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // User find karo — password nahi chahiye
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        res.status(401);
        throw new Error("User not found");
      }

      next();
    } catch (error) {
      console.error("JWT Auth Error:", error.name, error.message);
      res.status(401);
      throw new Error("Not authorized — invalid token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized — no token");
  }
});

module.exports = { protect };