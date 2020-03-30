const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entry = new Schema({
    user_id: {
        type: String
    },
    entry_name: {
        type: String
    },
    entry_time: {
        type: Number
    },
    entry_pages: {
        type: Number
    },
    entry_completed: {
        type: Boolean
    }},
    {
    timestamps: true,
    }
    
);

module.exports = mongoose.model('Entry', Entry);