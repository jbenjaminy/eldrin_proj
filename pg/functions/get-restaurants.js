const knex = require('../connect');

const getRestaurants = (coordinates) => {
    const coords = JSON.parse(coordinates);
    console.log(coords);

    return new Promise((resolve, reject) => {
        knex.select()
            .from('panciterias')
            .then(restaurants => {
                resolve({ data: restaurants });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

module.exports = getRestaurants;
