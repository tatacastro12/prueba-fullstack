// backend/models/userCrudModel.js
const pool = require('../db');

async function listarUsuarios() {
  const result = await pool.query('SELECT id, nombre, email, rol FROM usuarios');
  return result.rows;
}

async function insertarUsuario(nombre, email, password, rol) {
  const result = await pool.query(
    'INSERT INTO usuarios (nombre, email, password, rol) VALUES ($1, $2, $3, $4) RETURNING *',
    [nombre, email, password, rol]
  );
  return result.rows[0];
}

module.exports = { listarUsuarios, insertarUsuario };
