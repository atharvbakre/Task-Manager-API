// Load all required modules
const mongoose = require('mongoose')

// Create Schema rather than just passing as an object so we can add other features
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

// Create collection
const Task = mongoose.model('Task', taskSchema)

module.exports = Task