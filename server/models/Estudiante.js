//import Mongoose from "mongoose";
const mongoose = require("mongoose");
const schema = mongoose.Schema;

let EstudianteSchema = new schema({
    Nombres:{type: String, require:[true, 'Nombre Obligatorio']},
    Apellidos:{type: String, require:[true, 'Nombre Obligatorio']},
    Documento:{type: String, require:[true, 'Nombre Obligatorio']},
    NumeroD:{type: String, require:[true, 'Nombre Obligatorio']},    
    Correo:{type: String, require:[true, 'Nombre Obligatorio']},
    Telefono:{type: String, require:[true, 'Nombre Obligatorio']},
    Contraseña:{type: String, require:[true, 'Nombre Obligatorio']},
    date:{type:Date, default:Date.now},
    active:{type:Boolean, default:true}
});




//Convertir a modelo

module.exports = mongoose.model('Estudiantes',EstudianteSchema)

//export default Estudiantes;


