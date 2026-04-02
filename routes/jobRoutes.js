const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Add Job
router.post("/add", async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.json(newJob);
});

// Get Jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;