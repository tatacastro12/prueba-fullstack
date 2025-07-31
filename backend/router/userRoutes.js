// backend/routes/userRoutes.js
const express = require('express');
const { obtenerUsuarios } = require('../controllers/userController');
const { verificarToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', verificarToken, obtenerUsuarios);

module.exports = router;
