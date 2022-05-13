const express = require('express');
const { cadastrarUsuario, obterPerfil, atualizarPerfil } = require('./controladores/usuarios');
const { login } = require('./controladores/login');
const verificaLogin = require('./filtros/verificaLogin');
const { novaPostagem, curtir, comentar } = require('./controladores/postagens');

const rotas = express()

rotas.post('/cadastro', cadastrarUsuario);

rotas.post('/login', login);

rotas.use(verificaLogin);

rotas.get('/perfil', obterPerfil);
rotas.put('/perfil', atualizarPerfil);

rotas.post('/postagens', novaPostagem);
rotas.post('/postagens/:postagemId/curtir', curtir);
rotas.post('/postagens/:postagemId/comentar', comentar);

module.exports = rotas