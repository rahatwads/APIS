const express = require('express');
const router = express.Router();
const DataModel = require('../models/DataModel');  // Make sure the path is correct

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await DataModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST create new user
router.post('/users', async (req, res) => {
  try {
    const newUser = new DataModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

module.exports = router;
