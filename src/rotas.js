const express = require('express');
const login = require('./controladores/login');
const usuarios = require('./controladores/usuarios')
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express()

rotas.post('/cadastro', usuarios.cadastrarUsuario);

rotas.post('/login', login.login);

rotas.use(verificaLogin);

rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil)

module.exports = rotas