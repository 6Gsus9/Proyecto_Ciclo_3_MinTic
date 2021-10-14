//import Mongoose from "mongoose";
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;



const cursosSchema = new Schema({
    ClassName:{type: String, require:[true, 'Nombre Obligatorio']},
    ClassInit:{type:String},
    ClassEnd:{type:String},
    ClassDate:{type:String},
    active:{type:Boolean, default:true}
});


// schema de clases programadas
// nombreCurso, fecha, Hora Inicio, hora Final

module.exports = Mongoose.model('Cursos',cursosSchema)


// export default Cursos;