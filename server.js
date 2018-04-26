/* eslint arrow-body-style: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const events = require('events');

const knex = require('./pg/connect');

const googleGeolocationApi = (endpoint, args) => {
    const emitter = new events.EventEmitter();

    unirest.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${endpoint}`)
        .qs(args)
        .end(response => {
            if (response.ok) emitter.emit('end', response.body);
            else emitter.emit('error', response.code);
        });
    return emitter;
};

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

app.get('/location/:apiKey', (req, res) => {
    const apiKey = req.params.apiKey;

    const getCoordinates = googleGeolocationApi(apiKey, {});

    getCoordinates.on('end', (coordinates) => {
        console.log('coordinates --> ', coordinates);

        res.json(coordinates);
    });
});

function runServer() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) runServer();
