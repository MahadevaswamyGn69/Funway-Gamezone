const express = require("express");
const router = express.Router();

const bookings = [];
const games = require("../data/games");

// CREATE BOOKING
router.post("/", (req, res) => {
  const { name, email, phone, game, players, date, time } = req.body;

  const playerCount = Number(players);

  // Check required fields
  if (!name || !email || !phone || !game || !playerCount || !date || !time) {
    return res.status(400).json({ message: "All fields required" });
  }

  // Max players check
  if (playerCount > 10) {
    return res.status(400).json({ message: "Maximum 10 players allowed" });
  }

  // Prevent past dates
  const todayStr = new Date().toISOString().split("T")[0];
  if (date < todayStr) {
    return res.status(400).json({
      message: "Date must be today or a future date"
    });
  }

  // Validate game
  const selectedGame = games.find(g => g.name === game);
  if (!selectedGame) {
    return res.status(400).json({ message: "Invalid game selected" });
  }

  // Price calculation
  const subtotal = selectedGame.price * playerCount;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  const booking = {
    id: "GZ" + Math.floor(100000 + Math.random() * 900000),
    name,
    email,
    phone,
    game,
    players: playerCount,
    date,
    time,
    subtotal,
    tax,
    total,
    createdAt: new Date(),
    used: false
  };

  bookings.push(booking);

  res.status(201).json({
    message: "Booking confirmed",
    booking
  });
});

// GET ALL BOOKINGS (ADMIN)
router.get("/", (req, res) => {
  res.json(bookings);
});

// TODAY SALES
router.get("/today/sales", (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  const todayBookings = bookings.filter(
    b => b.createdAt.toISOString().split("T")[0] === today
  );

  const totalSales = todayBookings.reduce(
    (sum, b) => sum + b.total, 0
  );

  res.json({
    count: todayBookings.length,
    totalSales
  });
});

module.exports = router;
