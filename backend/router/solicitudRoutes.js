// backend/routes/solicitudRoutes.js
const express = require('express');
const {
  obtenerSolicitudes,
  crearSolicitud,
  borrarSolicitud,
} = require('../controllers/solicitudController');
const { verificarToken, soloAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', verificarToken, obtenerSolicitudes);
router.post('/', verificarToken, crearSolicitud);
router.delete('/:id', verificarToken, soloAdmin, borrarSolicitud);

module.exports = router;
