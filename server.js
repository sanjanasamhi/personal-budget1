const express = require('express');
const app = express();
const port = 3002;


app.use('/',express.static('public'));
const budget = require('./budget-data.json');



app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});