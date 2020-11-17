// Modulos internos

const mongoose = require("mongoose");

//Esquema

const esquemaEvento = new mongoose.Schema({
    idUsuario: String,
    nombre: String,
    descripcion: String,
    lugar: String,
    sticker:String,
    fechaEvento:String,
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
})

//Creamos los exports

const Evento = mongoose.model("evento", esquemaEvento);
module.exports = Evento;