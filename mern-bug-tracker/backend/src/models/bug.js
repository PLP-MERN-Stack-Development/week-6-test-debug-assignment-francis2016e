const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['open', 'in-progress', 'resolved'],
        default: 'open',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the updatedAt field before saving
bugSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;