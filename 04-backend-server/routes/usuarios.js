/**
 * RUTA: /api/usuarios
 */

const { Router, request } = require("express");
const { getUsuarios } = require("../controllers/usuarios");

const router = Router();

router.get("/", getUsuarios);

module.exports = router;
