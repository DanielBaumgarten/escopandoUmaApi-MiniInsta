const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'devs1986',
        database: 'meu_insta'
    }
});

module.exports = knex;
