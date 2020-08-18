const express = require('express');
const path = require('path');
const app = express.Router();
const api = require('../api/index');

app.route('/')
.get((req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})
app.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/PA9Uhvw');
})
app.get('/generator', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "generator.html"));
})
app.use('/api', api);

module.exports = app;