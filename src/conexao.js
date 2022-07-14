const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || 'ec2-3-219-229-143.compute-1.amazonaws.com',
        user: process.env.DB_USER || 'poegcmifbgehkl',
        password: process.env.DB_PASS || 'c5c0599e5d4a177ad2368e3bcf8bcfa6baeddcf155f4092c19ba4aa7219a0da7',
        database: process.env.DB_NAME || 'd3k57bhif9qn7l',
        port: process.env.DB_PORT || 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex;