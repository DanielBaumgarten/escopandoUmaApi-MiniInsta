const express = require('express');
const {login} = require('./controladores/login');
const { cadastrarUsuario, obterPerfil, atualizarPerfil } = require('./controladores/usuarios')
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express()

rotas.post('/cadastro', cadastrarUsuario)
rotas.post('/login', login);

rotas.use(verificaLogin);

rotas.get('/perfil', obterPerfil);
rotas.put('/perfil', atualizarPerfil)

module.exports = rotas