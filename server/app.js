import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';



const app = express();

// Conexión base de datos
const mongoose = require('mongoose');
//coneccion a base de datos

const uri = 'mongodb+srv://Gsus:<proyecto3>@cluster0.t9ckf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//const uri = 'mongodb://localhost:27017/estudiantes';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
// Or using promises
mongoose.connect(uri, options).then(
 /** ready to use. The `mongoose.connect()` promise resolves to
mongoose instance. */
 () => { 
    console.log('Conectado a DB') 
    },
 /** handle initial connection error */
 err => { console.log(err) }
);

//MiddleWare
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


//Rutas
// app.get('/', function(req,res){

//     res.send('Hola mundo');

// });
app.use('/api', require('./routes/Estudiante'));
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
// Puerto
// app.listen(3000, function(){
//     console.log("el servidor escucha por el puerto 3000")
// })
app.set('puerto', process.env.PORT || 3000);
app.listen(app.set('puerto'), function(){
    console.log("Eaxmple app listening on port " + app.get('puerto'))
});
