const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  skillsRequired: [String],
  dateApplied: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Job", JobSchema);