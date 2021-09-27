import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const notaSchema = new Schema({
    pNombre:{type: String, require:[true, 'Nombre Obligatorio']},
    sNombre:{type: String, default:'no tiene'},
    apellidos:{type: String, require:[true, 'Nombre Obligatorio']},
    correo:{type: String, require:[true, 'Nombre Obligatorio']},
    date:{type:Date, default:Date.now},
    active:{type:Boolean, default:true}
});

//Convertir a modelo

const Nota= Mongoose.model('Nota',notaSchema)

export default Nota;

