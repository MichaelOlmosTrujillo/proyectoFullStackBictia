//Modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema

const esquemaCentroCultural = new mongoose.Schema({
    nombre:{
        type:String,
    },
    ubicacion:{
        type:String,
    },
     correo:{
        type:String,
    },
    pass:{
        type: String,
    },
    fechaRegistro:{
        type: Date,
        default: Date.now,
    }

})

//Generamos el JWT

esquemaCentroCultural.methods.generateJWT = function (){
    return jwt.sign({
        _id:this._id,
        nombre: this.nombre,
        correo: this.correo,
        pass: this.pass
    }, "Cono de uvas")
}

//Creamos los exports

const CentroCultural = mongoose.model("centroCultural", esquemaCentroCultural);
module.exports.CentroCultural = CentroCultural;
module.exports.esquemaCentroCultural = esquemaCentroCultural;