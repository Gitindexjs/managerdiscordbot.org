const express = require('express');
const path = require('path');
const app = express.Router();
const v1 = require('./v1/index')

app.route('/')
.get((req, res) => {
    res.redirect('/api/v1');
})
app.get('/v1', v1);

module.exports = app;