/**
 * RUTA:
 *      /api/upload
 */

const { Router } = require("express");
const expressFileUpload = require('express-fileupload');

const { validarJWT } = require("../middlewares/validar-jwt");
const { fileUplodas, retornaImagen } = require("../controllers/uploads");

const router = Router();

// default options
router.use(expressFileUpload());

router.put("/:tipo/:id", validarJWT, fileUplodas);
router.get("/:tipo/:foto", retornaImagen);

module.exports = router;
