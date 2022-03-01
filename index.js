const express = require('express');
const path = require('path');
//Asi como está va a leer el archivo .env
//creo que lee el puerto que se le va a asignar también
require('dotenv').config();

// DB config
require('./database/config').dbConnection();

//App de Express
const app = express();

// Lectura y parseo del Body
app.use( express.json() );

//Node Server
const server = require('http').createServer(app);
//voy a exportar io
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




//Path público
//__dirname: resulve la direccion de la carpeta ya sea en mi pc o en el servisor
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );

//Mis Rutas
app.use( '/api/login', require('./routes/auth') );


server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error( err );

    console.log( 'Servidor corriendo en puerto!!!!', process.env.PORT );
});