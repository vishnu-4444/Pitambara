const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' }));

// Routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/blog", require("./routes/blog"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected.");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.error("MongoDB connection error:", err));
