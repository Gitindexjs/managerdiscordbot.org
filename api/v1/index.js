const express = require('express');
const app = express.Router();
const channelSchema = require('../../models/Channel');
app.route('/')
.get((req, res) => {
    res.json({message: "success"});
});
app.route('/addchannel')
.post((req, res) => {
    const channel = new channelSchema({
        guild: req.body.guild,
        channel: req.body.channel,
        user: req.body.user
    })
})

module.exports = app;