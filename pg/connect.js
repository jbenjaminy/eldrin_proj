let databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/pancit-shops';
if (process.env.NODE_ENV === 'production') {
    databaseUrl += '?ssl=true';
}

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'password',
        database: 'pancit-shops'
    }
});

module.exports = knex;
