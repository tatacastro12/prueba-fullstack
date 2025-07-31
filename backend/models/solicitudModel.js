// backend/models/solicitudModel.js
const pool = require('../db');

async function listarSolicitudes() {
  const result = await pool.query('SELECT * FROM solicitudes');
  return result.rows;
}

async function insertarSolicitud(asunto, descripcion, usuario_id) {
  const result = await pool.query(
    'INSERT INTO solicitudes (asunto, descripcion, usuario_id) VALUES ($1, $2, $3) RETURNING *',
    [asunto, descripcion, usuario_id]
  );
  return result.rows[0];
}

async function eliminarSolicitud(id) {
  const result = await pool.query('DELETE FROM solicitudes WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}

module.exports = { listarSolicitudes, insertarSolicitud, eliminarSolicitud };
