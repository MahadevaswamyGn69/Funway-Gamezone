const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// 👉 API routes
const bookingRoutes = require("./routes/booking.routes");
const adminRoutes = require("./routes/admin.routes")
app.use("/api", adminRoutes)
app.use("/api/bookings", bookingRoutes);

// 👉 TEST route (must work)
app.get("/test", (req, res) => {
  res.send("Backend is working ✅");
});

// 👉 Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// 👉 Default route - serve home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/home.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
