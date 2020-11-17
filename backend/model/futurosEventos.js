//Modulos internos

const mongoose = require("mongoose");

// Esquema

const esquemaEventoFuturo = new mongoose.Schema({
        nombre: String,
        descripcion: String,
        lugar: String,
        fechaEvento: String,
        correoContacto:String,
    fechaRegistro:{
        type: Date, 
        default: Date.now
    }
})

//creamos los exports

const EventoFuturo = mongoose.model("eventoFuturo", esquemaEventoFuturo)
module.exports = EventoFuturo;