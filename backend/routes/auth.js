//Modulos de node
const express = require("express");
const router = express.Router();

//Modulos internos
//Autenticación del usuario
const {Usuario} = require("../model/usuario");

// ruta

router.post("/", async(req, res)=>{
    //Validamos que exista el correo
    const usuario = await Usuario.findOne({correo: req.body.correo});
    // Si no existe el correo
    if(!usuario) return res.status(401).send("Correo o contraseña no son válidos");
    // Si el pass no existe 
    if(usuario.pass !== req.body.pass) return res.status(401).send("Correo o contraseña no son válidos");
    // Generar el JWT
    const jwtToken = usuario.generateJWT();
    console.log("jwtToken de autenticación", jwtToken);
    res.status(200).send({jwtToken});
});


//Exports 
module.exports = router;