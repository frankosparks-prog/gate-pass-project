const express = require("express");
const Occurrence = require("../models/Occurence");
const router = express.Router();

// POST route to submit an occurrence
router.post("/", async (req, res) => {
  const { endTime, description, remarks, gate, submittedBy } = req.body;
 // <-- change this
  try {
    const newOccurrence = new Occurrence({
  endTime,
  description,
  remarks,
  gate,
  submittedBy,
});

    await newOccurrence.save();
    res.status(201).json(newOccurrence);
  } catch (error) {
    console.error("Occurrence creation error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// GET route to fetch occurrences (all or by specific user if userId query param is given)
router.get("/", async (req, res) => {
  try {
    const userId = req.query.userId;

    let filter = {};
    if (userId) {
      filter.submittedBy = userId;
    }

    const occurrences = await Occurrence.find(filter).populate("submittedBy");
    res.status(200).json(occurrences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// PUT route to update a specific occurrence by ID
router.put("/:id", async (req, res) => {
  const { endTime, description, remarks, gate } = req.body;
  try {
    const updatedOccurrence = await Occurrence.findByIdAndUpdate(
      req.params.id,
      { endTime, description, remarks, gate },
      { new: true } // return the updated document
    );
    if (!updatedOccurrence) {
      return res.status(404).json({ error: "Occurrence not found" });
    }
    res.status(200).json(updatedOccurrence);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE route to delete a specific occurrence by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedOccurrence = await Occurrence.findByIdAndDelete(req.params.id);
    if (!deletedOccurrence) {
      return res.status(404).json({ error: "Occurrence not found" });
    }
    res.status(200).json({ message: "Occurrence deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
