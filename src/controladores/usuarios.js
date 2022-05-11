const knex = require('../../BancoDeDados/conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req,res) => {
    const { username, senha } = req.body;

    if(!username) {
        return res.status(404).json("O campo username é obrigatório")
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório")
    }

    if (senha.length < 5) {
        return res.status(404).json("A senha deve conter, no mínimo, 5 caracteres")
    }

    try {
        const quantidadeUsuarios = await knex('usuarios').where({ username }).first();

        if (quantidadeUsuarios) {
            return res.status(400).json("O username infirmado já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        
        const usuario = await knex('usuarios').insert({
            username,
            senha: senhaCriptografada
        });

        if (!usuario){
            return res.status(400).json("O usuário não foi cadastrado")
        }

        return res.status(200).json("O usuário foi cadastrado.");
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

    const obterPerfil = async (req,res) =>{
        return res.status(200).json(req.usuario)
    }

module.exports = {
    cadastrarUsuario,
    obterPerfil
}