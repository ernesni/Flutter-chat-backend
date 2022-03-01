const { io } = require('../index');

//Mensajes de Sockets
//client: va a ser una computadora o un dispositivo que se acaba de conectar a mi socket
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');    
    });

    /*client.on('mensaje', ( payload ) => {
        console.log('Mensaje!!!', payload);

        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });*/
});