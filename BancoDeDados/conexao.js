const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '*****',
        database: 'meu_insta'
    }
});

module.exports = knex;
