const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/taskmaster", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define Schemas
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  totalFocusTime: Number,
  reports: [
    {
      date: Date,
      focusTime: Number,
      breakTime: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/api/users", async (req, res) => {
  const { username, email } = req.body;
  try {
    const newUser = new User({
      username,
      email,
      totalFocusTime: 0,
      reports: [],
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/users/:id/reports", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user.reports);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
