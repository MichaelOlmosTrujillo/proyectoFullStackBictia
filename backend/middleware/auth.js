// modulos de node

const jwt = require("jsonwebtoken");

// Crear función middleware

function auth(req, res, next) {
  let jwtToken = req.header("Authorization");
  console.log("jwtToken de registro de evento por usuario", jwtToken);
  // Separo el Bearer del token

  /*
    Bearer. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlhYzA2NWY0MDQ3NTFiNDgyOWEzOWEiLCJub21icmUiOiJQZXBvbiIsImNvcnJlbyI6InBlcG9uQGxvbC5jb20iLCJpYXQiOjE2MDM5NzczNTZ9.GQf8N_ocLBTOnze_IsOW9rBSpPY_xfOZ7O797plroYU
    */
  jwtToken = jwtToken.split(" ")[1];
  // Si no existe el token
  if (!jwtToken) return res.status(401).send("No hay token para validar");
  // Si existe el jwt
  try {
    //Verificación del JWT y la palabra clave encriptada
    const payload = jwt.verify(jwtToken, process.env.JWTSECRET_USUARIO);
    //Si se verifica la información se le agrega al usuario el "payload"
    req.usuario = payload;
    //Hace el siguiente paso si verifica la información
    next();
  } catch (error) {
    // Si falla la verificación del JWT
    res.status(401).send("Token no válido, sin autorización a procesos");
  }
}

//Exports
module.exports = auth;
