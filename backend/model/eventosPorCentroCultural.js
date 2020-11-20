// Modulos internos

const mongoose = require("mongoose");

//Esquema

const esquemaEventoPorCentroCultural = new mongoose.Schema({
    idCentroCultural:String, 
    nombre: String, 
    descripcion: String, 
    lugar: String,
    tipoEvento: String,
    sticker: String,
    fechaEvento: String,
    fechaRegistro: {
        type:Date,
        default:Date.now
    }
})

//Creamos los exports

const EventoPorCentroCultural = mongoose.model("eventoPorCentroCultural", esquemaEventoPorCentroCultural);
module.exports = EventoPorCentroCultural;