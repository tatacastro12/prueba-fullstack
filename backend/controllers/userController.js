// backend/controllers/userController.js
const { listarUsuarios } = require('../models/userCrudModel');

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};

module.exports = { obtenerUsuarios };
