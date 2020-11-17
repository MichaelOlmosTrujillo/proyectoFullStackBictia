//Modulos de node
const express = require("express");
const router = express.Router();
//Modulos internos

const {Usuario} = require("../model/usuario");
const {CentroCultural} = require("../model/centroCultural");
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
    res.status(200).send({jwtToken});
});

router.post("/centroCultural", async(req, res)=>{
    console.log("endpoint invocado");
    // Validamos que exista el correo
    const centroCultural = await CentroCultural.findOne({correo: req.body.correo});
    // Si no existe el correo
    if(!centroCultural) return res.status(401).send("Correo o contraseña no son válidos");
    // Si el pass no existe
    if(centroCultural.pass !== req.body.pass) return res.status(401).send("Correo o contraseña no son válidos");
    // Generar el JWT
    const jwtToken = centroCultural.generateJWT();
    res.status(200).send({jwtToken});
})

//Exports 
module.exports = router;