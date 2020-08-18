const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const port = 3000;
const app = express();
const routes = require('./routes/index');

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.static(`${__dirname}/public/`));
app.use('/', routes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "notFound.html"));
})
app.use((error, req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "error.html"))
})


app.listen(port, () => console.log(`listening on port: ${port}`));