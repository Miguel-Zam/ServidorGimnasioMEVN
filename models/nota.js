import mongoose from "mongoose";
const Schema=mongoose.Schema;

const notaSchema=new Schema({
    Nombre:String,
    Genero:String,
    Correo:String,
    Celular:String,
    Peso:String,
    Altura:String,
    Usuario:String,
    Contraseña:String,
    Membresia:String
});

//Convertir a modelo
const Nota=mongoose.model('Nota',notaSchema);
//Exportar modelo
export default Nota;