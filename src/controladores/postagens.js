const knex = require('../../BancoDeDados/conexao');

const novaPostagem = (req, res) => {
const {id } =  req.usuario;
const {texto, fotos} = req.body;
}