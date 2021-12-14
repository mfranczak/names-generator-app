// server.js

const express = require('express');
const faker = require('faker');

//Create an app
const app = express();

const getRandomInt = function(max) {
    return Math.floor(Math.random() * max);
  }


app.get('/', (req, res) => {
    res.send('Hello ' + faker.name.firstName() + '!\n');
});


app.get('/names', (req, res) => {
    const names = [];
    let n = getRandomInt(12);

    while (n--) {
        names.push(faker.name.firstName())
    }

    if (names.length === 0) {
        console.error('ERROR No names generated.');
        return res.status(500).send({names: []});
    }

    console.log('Generated names total: ' + names.length);

    res.send({names: names});
});


//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);