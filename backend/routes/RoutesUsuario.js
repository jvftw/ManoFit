const express = require('express');
const UsuariosController = require('../controllers/UsuarioControllers');

const RoutesUsuario = express.Router();

// Rota raiz para verificar se o servidor está funcionando
RoutesUsuario.get('/', (req, res) => {
    res.send('Bem-vindo à API de Usuários');
});

RoutesUsuario.get('/listarusuario', UsuariosController.ListarUsuarios);
RoutesUsuario.post('/cadastrarusuario', UsuariosController.CadastrarUsuario);
RoutesUsuario.put('/atualizarusuario', UsuariosController.AtualizarUsuario);
RoutesUsuario.delete('/deletarusuario/:id', UsuariosController.DeletarUsuario);
RoutesUsuario.get('/loginusuario', UsuariosController.LoginUsuario);

module.exports = RoutesUsuario;
