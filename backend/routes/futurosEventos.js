const express = require("express");
const router = express.Router();
//MOdulos internos

const EventoFuturo = require("../model/futurosEventos");

//Rutas

//Registrar Evento futuro
//No es necesario realizar una autenticación
router.post("/", async(req, res)=>{
    //No es necesario verificar el id de un Usuario
    //Se crea el evento futuro en la colección eventoFuturo
    const eventoFuturo = new EventoFuturo({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    lugar: req.body.lugar,
    fechaEvento: req.body.fechaEvento,
    correoContacto:req.body.correoContacto,
    })
    //Enviamos el resultado
    const result = await eventoFuturo.save();
    res.status(200).send(result);
})

//Exports
module.exports = router;