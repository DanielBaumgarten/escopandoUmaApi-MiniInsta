const knex = require ('../../BancoDeDados/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');

const login = async(req, res) => {

    const { username, senha } = req.body;

    if(!username || !senha) {
        return res.status(404).json('É obrigatório usarname e senha');
    }

    try {
        const usuario = await knex('usuarios').where({ username }).first();

        if(!usuario) {
            return res.status(404).json('o usuario não foi encontrado');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if(!senhaCorreta) {
            return res.status(400).json("email e senha não confere");
        }

        const dadosTokenUsuario = {
            id: usuario_id,
            username: usuario.username
        }

        const token = jwt.sign(dadosTokenUsuario, senhaHash, { expiresIn: '100h'});

        const { senha, ...dadosUsuario} = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    }
    catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}