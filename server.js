const express = require('express');
const bodyParser = require('body-parser');

const addRestaurant = require('./pg/functions/add-restaurant');
const findRestaurants = require('./pg/functions/find-restaurants');
const getDetails = require('./pg/functions/find-restaurants');

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

app.post('/add-restaurant', (req, res) => {
    const restaurantDetails = req.body;

    addRestaurant(restaurantDetails)
        .then((details, error) => {
            if (error) {
                console.error(error);
                return res.sendStatus(500);
            }

            res.json({ details });
        });
});

app.get('/find-restaurants', (req, res) => {
    const location = req.body;

    findRestaurants(location)
        .then((error, restaurants) => {
            if (error) {
                console.error(error);
                return res.sendStatus(500);
            }

            res.json({ restaurants });
        });
});

app.get('/get-details', (req, res) => {
    const restaurantId = req.body;
    
    getDetails(restaurantId)
        .then((error, details) => {
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
