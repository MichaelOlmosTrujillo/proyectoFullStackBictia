const express = require("express");
const router = express.Router();
// Modulos internos

const EventoPorUsuario = require("../model/eventosPorUsuario");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");
const cargarArchivo = require("../middleware/file");
//Rutas
// Obtener una lista de los eventos para un usuario determinado
router.get("/listaParaUsuario", auth, async (req, res) => {
    //Buscamos el usuario logueado
    const usuario = await Usuario.findById(req.usuario._id);
    // Si el usuario no existe 
    if (!usuario) return res.status(401).send("Usuario no existe en BD");
    // Si el usuario si existe 
    // Busca el idUsuario con el método "find", trae todos los que encuentren
    const eventosPorUsuario = await Evento.find({
        idUsuario: req.usuario._id,
    });
    res.send(eventosPorUsuario);
})

//Registrar Actividad
// Antes de seguir el Post hace una verificación con "auth"
router.post("/", auth, async (req, res) => {
    //Obtenemos el id del usuario logueado con el correo y el pass
    const usuario = await Usuario.findById(req.usuario._id);
    // Si el usuario no existe
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si existe el usuario creamos una actividad en el tablero
    const eventoPorUsuario = new EventoPorUsuario({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        lugar: req.body.lugar,
        tipoEvento: req.body.tipoEvento,
        sticker:req.body.sticker,
        fechaEvento: req.body.fechaEvento,
    });
    //Enviamos el resultado
    const result = await eventoPorUsuario.save();
    res.status(200).send(result);
})

//Registrar actividad con imagen
// cargarArchivo es la función que está en "file.js" para cargar archivos
router.post("/cargarArchivo", cargarArchivo.single("sticker"), auth, async (req, res) => {
    //protocolo http o https o con el local o el dominio
    const url = req.protocol + "://" + req.get("host");
    // Verificamos si existe el usuario
    const usuario = await Usuario.findById(req.usuario._id);
    // Si el usuario no existe
    if (!usuario) return res.status(400).send("No existe el usuario en BD");
    // Definimos la ruta de la imagen
    let rutaImagen = null;
    if (req.file.filename) {
        rutaImagen = url + "/public/" + req.file.filename;
    } else {
        rutaImagen = null;
    }
    //Guardar en eventos
    const eventoPorUsuario = new EventoPorUsuario({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        lugar: req.body.lugar,
        tipoEvento: req.body.tipoEvento,
        sticker: rutaImagen,
        fechaEvento: req.body.fechaEvento,
    })
    const result = await eventoPorUsuario.save();
    res.status(200).send(result);
})

//Eliminar actividad
router.delete("/:_id", auth, async (req, res) => {
    //Buscamos el usuario por el id
    const usuario = await Usuario.findById(req.usuario._id);
    // Si el usuario no existe
    if (!usuario) return res.status(401).send("No hay usuario en BD");
    //Eliminamos actividad asignada al usuario
    const eventoPorUsuario = await EventoPorUsuario.findByIdAndDelete(req.params._id);
    // Si no existe el evento
    if (!eventoPorUsuario) return res.status(401).send("No hay evento con ese id");
    // Si se encuentra la actividad
    res.status(200).send({
        message: "Evento eliminado"
    });

});

//Exports 
module.exports = router;