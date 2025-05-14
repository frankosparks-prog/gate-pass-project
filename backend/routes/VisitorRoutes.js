const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

// CREATE - POST /api/visitors
router.post("/", async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    const savedVisitor = await visitor.save();
    res.status(201).json(savedVisitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL - GET /api/visitors
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 });
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE - GET /api/visitors/:id
router.get("/:id", async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);
    if (!visitor) return res.status(404).json({ error: "Visitor not found" });
    res.json(visitor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - PUT /api/visitors/:id
router.put("/:id", async (req, res) => {
  try {
    const updatedVisitor = await Visitor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVisitor)
      return res.status(404).json({ error: "Visitor not found" });
    res.json(updatedVisitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// TIMEOUT - PUT /api/visitors/:id/timeout
router.put("/visitors/:id/timeout", async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndUpdate(
      req.params.id,
      { timeOut: new Date() },
      { new: true }
    );
    if (!visitor) {
      return res.status(404).json({ message: "Visitor not found" });
    }
    res.json(visitor);
  } catch (err) {
    console.error("Time out error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE - DELETE /api/visitors/:id
router.delete("/:id", async (req, res) => {
  try {
    const deletedVisitor = await Visitor.findByIdAndDelete(req.params.id);
    if (!deletedVisitor)
      return res.status(404).json({ error: "Visitor not found" });
    res.json({ message: "Visitor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
