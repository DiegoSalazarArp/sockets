var socket = io();

//escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor')
});


socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor ')
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'HolaMundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
})