const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path'); // Para acceder al directorio actual

const app=express();

//Conexion a base de datos
const mongoose = require('mongoose');
//const uri='mongodb://localhost:27017/prueba';
const uri='mongodb+srv://Zam_Usuarios:zscathOqMGh00yIe@cluster0.s3c1b.mongodb.net/prueba';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

//Promesa
mongoose.connect(uri, options).then(
    () => {console.log('Conectado a base de datos')},
    err => {err}
  );

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //application/x-www-form-urlencoded
//app.use(express.static(path.join(__dirname, 'public')));

//Rutas
/*app.get('/',function(req,res){
    res.send('Hola mundo');
});*/

app.use('/api', require('./routes/nota'));//----------------------

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Puerto

//fijo
/*app.listen(3000,function(){
    console.log("El servidor escucha por el puerto 3000");
});*/

//automatico
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
console.log('Example app listening on port'+ app.get('puerto'));
});