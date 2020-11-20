// Modulos de node
const express = require("express");
const router = express.Router();

// Modulos internos

const {CentroCultural} = require("../model/centroCultural");

//Ruta

router.post("/", async(req, res)=>{
    //Validamos que exista el correo
    const centroCultural = await CentroCultural.findOne({correo: req.body.correo});
    // Si no existe el correo
    if(!centroCultural) return res.status(401).send("Correo o contraseña no son válidos");
    // Si el pass no existe
    if(centroCultural.pass !== req.body.pass) return res.status(401).send("Correo o contraseña no son válidos");
    // Generar el JWT
    const jwtToken = centroCultural.generateJWT();
    res.status(200).send({jwtToken}); 
});

//Exports 
module.exports = router;