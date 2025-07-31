// backend/controllers/solicitudController.js
const {
  listarSolicitudes,
  insertarSolicitud,
  eliminarSolicitud,
} = require('../models/solicitudModel');

const obtenerSolicitudes = async (req, res) => {
  try {
    const solicitudes = await listarSolicitudes();
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener solicitudes' });
  }
};

const crearSolicitud = async (req, res) => {
  const { asunto, descripcion } = req.body;
  const usuario_id = req.usuario.id;

  try {
    const nueva = await insertarSolicitud(asunto, descripcion, usuario_id);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear solicitud' });
  }
};

const borrarSolicitud = async (req, res) => {
  const { id } = req.params;

  try {
    const eliminada = await eliminarSolicitud(id);
    if (!eliminada) return res.status(404).json({ mensaje: 'No encontrada' });
    res.json(eliminada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar' });
  }
};

module.exports = { obtenerSolicitudes, crearSolicitud, borrarSolicitud };
