/* eslint arrow-body-style: 0 */
const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./pg/connect');

const app = express();
const jsonParser = bodyParser.json();
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

app.use(express.static('build'));
app.use(jsonParser);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.get('/restaurants/:latitude/:longitude', (req, res) => {
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;

    console.log('coordinates, server.js --> ', latitude, longitude);

    knex.select()
        .from('restaurants')
        .then(restaurants => {
            console.log('restaurants --> ', restaurants);

            res.json(restaurants);
        })
        .catch(err => {
            console.log('err --> ', err);
            res.sendStatus(500);
        });
});

function runServer() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) runServer();
