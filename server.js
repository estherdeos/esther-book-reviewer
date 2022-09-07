const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
const fs = require('fs');
let rawdata = fs.readFileSync('100-books.json');
let books = JSON.parse(rawdata);

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/home', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.get('/books', (req, res) => {
    res.json(books)
})

app.listen(process.env.PORT || 8080);