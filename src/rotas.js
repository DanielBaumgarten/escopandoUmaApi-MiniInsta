const express = require('express');
const login = require('./controladores/login');
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express()

rotas.post('/login', login.login);

rotas.use(verificaLogin)

module.exports = rotas