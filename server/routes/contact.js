const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newMessage = new Contact({ name, email, phone, message });
    await newMessage.save();

    res.status(200).json({ success: true, message: "Message received!" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

router.get("/", async (req, res) => {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      res.status(200).json(messages);
    } catch (err) {
      console.error("Error fetching messages:", err);
      res.status(500).json({ success: false, message: "Failed to fetch messages" });
    }
});

router.get("/:id", async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json(message);
  } catch (err) {
    console.error("Error fetching message:", err);
    res.status(500).json({ success: false, message: "Failed to fetch message" });
  }
});


module.exports = router;
