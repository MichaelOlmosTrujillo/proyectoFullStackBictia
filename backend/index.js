require('dotenv').config() //Config mongo
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");//Sirve para conectar el Frontend con el Backend 
//Usando diferentes url

//Modelos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const authCentroCultural = require("./routes/authCentroCultural");
const eventosPorUsuario = require("./routes/eventosPorUsuario");
const eventosFuturos = require("./routes/futurosEventos");
const centroCultural = require("./routes/centroCultural");
const eventosPorCentroCultural = require("./routes/eventosPorCentroCultural");

//App
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).send("El servidor está corriendo");
});
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);
app.use("/api/authCentroCultural/", authCentroCultural);
app.use("/api/eventosPorUsuario/", eventosPorUsuario);
app.use("/api/eventosFuturos/", eventosFuturos);
app.use("/api/centroCultural/", centroCultural);
app.use("/api/eventosPorCentroCultural/", eventosPorCentroCultural)

// Puerto de ejecución

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log("Ejecutando en puerto: " + port);
})

// Registro en BD en mongo

mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexión con mongo: OK"))
    .catch((error) => console.log("Conexión con mongo: OFF"))