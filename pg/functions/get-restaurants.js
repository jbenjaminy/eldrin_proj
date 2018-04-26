const knex = require('../connect');

const getRestaurants = (coordinates) => {
    console.log(coordinates);

    return new Promise((resolve, reject) => {
        knex.select()
            .from('restaurants')
            .then(restaurants => {
                resolve(restaurants);
            })
            .catch(err => {
                reject(err);
            });
    });
};

module.exports = getRestaurants;
