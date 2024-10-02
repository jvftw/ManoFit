'use strict';

const { Usuario } = require('../models');

class UsuariosController {
    static async ListarUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            if (usuarios.length > 0) {
                res.status(200).json({ data: usuarios });
            } else {
                res.status(404).json({ message: 'Não existem usuários cadastrados' });
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async LoginUsuario(req, res) {
        try {
            const { email, password } = req.query; 

            const usuario = await Usuario.findOne({ where: { email, password } });

            if (usuario) {
                res.status(200).json({ username: usuario.username });
            } else {
                res.status(401).json({ message: 'Usuário não encontrado ou senha incorreta' });
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async CadastrarUsuario(req, res) {
        try {
            const usuarioExistente = await Usuario.findOne({ where: { email: req.body.email } });
            if (usuarioExistente) {
                res.status(400).json({ message: 'Esse usuário já existe!' });
            } else {
                await Usuario.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });
                res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async AtualizarUsuario(req, res) {
        
        try {
            const { email, username, password } = req.body;
            const usuario = await Usuario.findOne({ where: { email } });
            if (!usuario) {
                return res.status(404).json({ message: 'Esse usuário não existe' });
            }

            const updates = {};
            if (username) updates.username = username;
            if (password) updates.password = password;

            await usuario.update(updates);
            return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    }

    static async DeletarUsuario(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            } else {
                await usuario.destroy();
                res.status(200).json({ message: 'Usuário excluído com sucesso' });
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }
}

module.exports = UsuariosController;
