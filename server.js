const express = require('express');
const generator = require('./src/generator.js');
const app = express();
// app.use(express.static('public'));

//app.use(express.static(__dirname + 'public'))

app.use("/", express.static(__dirname + "/public"));

app.get('/iam', async (req, res)  => {
    res.send({name: await generator.getName()});
});

app.get('/names', async (req, res) => {
    const names = await generator.getNames();

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