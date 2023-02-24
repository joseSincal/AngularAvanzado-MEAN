/**
 * RUTA: /api/usuarios
 */

const { Router, request } = require("express");
const { getUsuarios, crearUsuario } = require("../controllers/usuarios");

const router = Router();

router.get("/", getUsuarios);

router.post("/", crearUsuario);

module.exports = router;
