// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { crearUsuario, buscarUsuarioPorEmail } = require('../models/userModel');
require('dotenv').config();

const register = async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  try {
    const usuarioExistente = await buscarUsuarioPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = await crearUsuario(nombre, email, hashedPassword, rol);

    res.status(201).json({ mensaje: 'Usuario creado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario', error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await buscarUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(400).json({ mensaje: 'Credenciales inválidas' });
    }

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) {
      return res.status(400).json({ mensaje: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol } });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
  }
};

module.exports = { register, login };
