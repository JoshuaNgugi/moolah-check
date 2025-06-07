const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    amount: {
        type: Number,
        require: true,
        min: [0, "Amount must be positive"]
    },
    category: {
        type: String,
        require: true,
        enum: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other']
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    }
}, {timestamps: true});

module.exports = mongoose.model('Expense', expenseSchema);