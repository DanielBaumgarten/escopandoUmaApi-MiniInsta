const express = require('express');
const {login} = require('./controladores/login');
const { cadastrarUsuario } = require('./controladores/usuarios')
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express()

rotas.post('/cadastro', cadastrarUsuario)
rotas.post('/login', login);

rotas.use(verificaLogin);


module.exports = rotas