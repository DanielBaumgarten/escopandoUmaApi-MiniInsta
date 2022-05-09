const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'devs1986',
        database: 'mini_insta'
    }
});

module.exports = knex;
