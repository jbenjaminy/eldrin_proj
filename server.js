const express = require('express');
const bodyParser = require('body-parser');

const createRestaurant = require('./pg/functions/create-restaurant');
const getRestaurants = require('./pg/functions/get-restaurants');

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

app.post('/restaurants', jsonParser, (req, res) => {
    const coordinates = req.body;

    getRestaurants(coordinates)
        .then((error, restaurants) => {
            if (error) {
                console.error(error);
                return res.sendStatus(500);
            }
            console.log(restaurants);

            res.json(restaurants);
        });
});

app.post('/add-restaurant', jsonParser, (req, res) => {
    const restaurantDetails = req.body;

    createRestaurant(restaurantDetails)
        .then((details, error) => {
            if (error) {
                console.error(error);
                return res.sendStatus(500);
            }

            res.json({ details });
        });
});

function runServer() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) runServer();
