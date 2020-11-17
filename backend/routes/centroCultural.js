const express = require('express');
const router = express.Router();

//Modulos creados

const {CentroCultural} = require("../model/centroCultural");

// Ruta

router.post("/", async(req, res)=>{
    //Revisamos si existe el mismo correo en nuestra BD
    let centroCultural = await CentroCultural.findOne({correo: req.body.correo});
    // Si el centro cultural existe en BD recibe un true o false
    if(centroCultural) return res.status(401).send("El centro cultural ya existe en BD");
    // Si el correo no existe 
    centroCultural = new CentroCultural({
        nombre: req.body.nombre,
        ubicacion:req.body.ubicacion,
        correo:req.body.correo,
        pass:req.body.pass,
    })

    // Guardamos el centro cultural en BD y se genera el JWT
    const result = await centroCultural.save();
    const jwtToken = centroCultural.generateJWT();
    res.status(200).send({jwtToken});

})

//Exports
module.exports = router;
