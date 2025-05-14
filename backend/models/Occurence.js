// models/Occurrence.js
const mongoose = require("mongoose");

const occurrenceSchema = new mongoose.Schema(
  {
    endTime: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      default: '',
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,  // Reference to the User model if applicable
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Occurrence = mongoose.model("Occurrence", occurrenceSchema);

module.exports = Occurrence;
