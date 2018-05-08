/* eslint arrow-body-style: 0 */
/* eslint max-len: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const events = require('events');

const knex = require('./pg/connect');

const googleDistanceMatrix = (endpoint, args) => {
    const emitter = new events.EventEmitter();

    unirest.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&${endpoint}`)
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

app.get('/restaurants/:origins/:distanceApiKey', (req, res) => {
    //const origins = req.params.origins;
    const origins = '17.609984,121.723454'
    const distanceApiKey = req.params.distanceApiKey;

    console.log('origins, server.js --> ', origins);
    console.log('distanceApiKey, server.js --> ', distanceApiKey);

    knex.select()
        .from('restaurants')
        .then(restaurants => {
            console.log('restaurants --> ', restaurants);
            let destinations = '';

            restaurants.forEach(restaurant => {
                const { latitude, longitude } = restaurant;

                destinations = `${destinations}|${latitude},${longitude}`;
            });

            const endpoint = `origins=${origins}&destinations=${destinations}&key=${distanceApiKey}`;

            const getDistances = googleDistanceMatrix(endpoint, {});

            getDistances.on('end', (output) => {
                console.log('distance matrix output --> ', output);
                const distances = output.rows[0].elements;

                const updatedRestaurants = restaurants.map((restaurant, index) => {
                    const distance = distances[index].distance.text;
                    const distanceVal = distances[index].distance.value;
                    const duration = distances[index].duration.text;

                    return { ...restaurant, distance, distanceVal, duration };
                });

                const sortedRestaurants = updatedRestaurants.sort((a, b) => {
                    return a.distanceVal - b.distanceVal;
                });

                res.json(sortedRestaurants);
            });
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
