const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");//Sirve para conectar el Frontend con el Backend 
//Usando diferentes url

//Modelos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const eventos = require("./routes/eventos");
const eventosFuturos = require("./routes/futurosEventos");
const centroCultural = require("./routes/centroCultural");

//App
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);
app.use("/api/eventos/", eventos);
app.use("/api/eventosFuturos/", eventosFuturos);
app.use("/api/centroCultural/", centroCultural);

// Puerto de ejecución

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log("Ejecutando en puerto: " + port);
})

// Registro en BD en mongo

mongoose.connect("mongodb://localhost/irCulturapp", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexión con mongo: OK"))
    .catch((error) => console.log("Conexión con mongo: OFF"))