// Modulos de node

const jwt = require("jsonwebtoken");

//Crear función middleware
//Autenticación del Centro Cultural
function authCentroCultural(req, res, next){
    let jwtToken = req.header("Authorization");
    //Separo el bearer del token

    jwtToken = jwtToken.split(" ")[1];
    //Si no existe el token
    if(!jwtToken) return res.status(401).send("No hay token que validar");
    //Si existe el jwt
    try {
        //Verificación del JWT y la palabra clave encriptada
        const payload = jwt.verify(jwtToken, process.env.JWTSECRET_CENTROCULTURAL);
        // Si se verifica la información se le agrega al usuario el "payload"
        req.centroCultural = payload;
        // Hace el siguiente paso si se verifica la información
        next();

    } catch (error) {
        // Si falla la verificación del JWT
        res.status(401).send("Token no válido, sin autorización a procesos");
    }
}



//Exports
module.exports = authCentroCultural;

