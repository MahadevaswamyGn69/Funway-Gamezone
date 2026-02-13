const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  console.log("EMAIL RECEIVED:", `"${email}"`);
  console.log("PASSWORD RECEIVED:", `"${password}"`);

  if (email === "admin@gmail.com" && password === "GameZone@Admin#2026") {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
