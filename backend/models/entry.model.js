const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entry = new Schema({
    user_id: {
        type: String
    },
    entry_pages: {
        type: Number
    },
    entry_minutes: {
        type: Number
    }},
    {
    timestamps: true,
    }
    
);

module.exports = mongoose.model('Entry', Entry);