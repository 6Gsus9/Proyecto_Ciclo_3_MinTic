import Mongoose from "mongoose";
const Schema = Mongoose.Schema;



const cursosSchema = new Schema({
    NombreCurso:{type: String, require:[true, 'Nombre Obligatorio']},
    HoraInicio:{type:Date},
    HoraFin:{type:Date},
    Fecha:{type:Date},
    active:{type:Boolean, default:true}
});


// schema de clases programadas
// nombreCurso, fecha, Hora Inicio, hora Final

const Cursos= Mongoose.model('Cursos',cursosSchema)


export default Cursos;