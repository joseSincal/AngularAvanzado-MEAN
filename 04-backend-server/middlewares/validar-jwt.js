

const validarJWT = (req, res, next) => {
    // Leer el Token
    const token = req.header('x-token');
    console.log(token);

    next();
}

module.exports = {
    validarJWT
}