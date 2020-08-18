const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    guild: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    }, 
    user: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Channel', channelSchema);