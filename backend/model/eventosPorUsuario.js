// Modulos internos

const mongoose = require("mongoose");

//Esquema

const esquemaEvento = new mongoose.Schema({
    idUsuario: String,
    nombre: String,
    descripcion: String,
    lugar: String,
    tipoEvento: String,
    sticker:String,
    fechaEvento:String,
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
})

//Creamos los exports

const EventoPorUsuario = mongoose.model("evento", esquemaEvento);
module.exports = EventoPorUsuario;