//Modulos de node

const multer = require("multer");

// Directorio donde se van a guardar

const directorio = "./public/";

//DiskStorage

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        // Si llega todo null se va a un error catch interno del multer
        cb(null, directorio)
    },
    filename: (req, file, cb)=>{
        // Por medio de la fecha de subida él asigna un código único a cada archivo.
        //"originalname" es un método de multer que da el nombre original del archivo
        const filename = Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
        // enviamos el archivo como debería quedar guardado
        cb(null, filename);
    },
});
// Cargar Archivo

const cargarArchivo = multer({
    storage: storage,
    fileFilter: (req, file, cb) =>{
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif"){
            cb(null, true);
        }else{
            cb(null, false);
            return cb(new Error('Solo aceptamos estos tipos de archivos - jpg - png -gif'));
        }
    }
});

// Exports 
module.exports = cargarArchivo;