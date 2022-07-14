const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-3-219-229-143.compute-1.amazonaws.com',
        user: 'poegcmifbgehkl',
        password: 'c5c0599e5d4a177ad2368e3bcf8bcfa6baeddcf155f4092c19ba4aa7219a0da7',
        database: 'd3k57bhif9qn7l',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex;