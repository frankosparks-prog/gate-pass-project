// models/Occurrence.js
const mongoose = require("mongoose");

const occurrenceSchema = new mongoose.Schema(
  {
    endTime: { type: Date, required: true },
    description: { type: String, required: true },
    remarks: { type: String, default: '' },
    gate: {
      type: String,
      enum: ["Gate 1", "Gate 2"],
      required: true,
    },
    submittedAt: { type: Date, default: Date.now },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);


const Occurrence = mongoose.model("Occurrence", occurrenceSchema);

module.exports = Occurrence;
