const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// @route   POST /api/expenses
// @desc    Create a new expense
// @access  Public (we'll protect this later with auth)
router.post('/', async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    // Create new expense
    const newExpense = new Expense({
      title,
      amount,
      category,
      date
    });

    const savedExpense = await newExpense.save();

    res.status(201).json(savedExpense);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;