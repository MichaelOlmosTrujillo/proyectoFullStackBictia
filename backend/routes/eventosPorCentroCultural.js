const express = require("express");
const router = express.Router();

// Modulos internos

const EventoPorCentroCultural = require("../model/eventosPorCentroCultural");
const { CentroCultural } = require("../model/centroCultural");
const authCentroCultural = require("../middleware/authCentroCultural");
const cargarArchivo = require("../middleware/file");
//Rutas
// Obtener una lista de los eventos para un centro cultural
router.get("/listaPorCentroCultural", authCentroCultural, async(req, res)=>{
    //Buscamos el centro cultural logueado
    const centroCultural = await CentroCultural.findById(req.centroCultural._id);
    // Si el centro cultural no existe
    if(!centroCultural) return res.status(401).send("Centro Cultural no existe en BD");
    // Si el centro cultural existe 
    // Busca el idCentroCultural  con el método "find", trae todos los que encuentre
    const eventosPorCentroCultural = await EventoPorCentroCultural.find({
        idCentroCultural: req.centroCultural._id,
    });
    res.send(eventosPorCentroCultural); 
})

// Registrar Actividad
// Antes de seguir el Post hace una verificación con "auth"
router.post("/", authCentroCultural, async(req, res)=>{
    //Obtenemos el id del centro cultural logueado con el correo y el pass
    const centroCultural = await CentroCultural.findById(req.centroCultural._id);
    // Si el centro cultural no existe
    if(!centroCultural) return res.status(400).send("El centro cultural no existe");
    // Si existe el usuario creamos un evento en el tablero del centro cultural
    const evento = new EventoPorCentroCultural({
        idCentroCultural:centroCultural._id, 
        nombre: req.body.nombre, 
        descripcion: req.body.descripcion, 
        lugar: req.body.lugar,
        tipoEvento: req.body.tipoEvento,
        sticker: req.body.sticker,
        fechaEvento: req.body.fechaEvento,
    });

    // Enviamos el resultado

    const result = await evento.save();
    res.status(200).send(result);
})

//Registrar evento con imagen


// Exports 
module.exports = router;