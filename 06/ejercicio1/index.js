// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
// Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// Entre las 13 y las 19 hs será 'Buenas tardes!'. 
// De 20 a 5 hs será 'Buenas noches!'.

// Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.


const http = require('http');
const moment = require('moment');

const server = http.createServer((peticion, respuesta) => {
    const horaActual = moment().format('HH');
    let mensaje;
    if (horaActual >= 6 && horaActual <= 12){
        mensaje = 'Buenos días!';
    } else if (horaActual >= 13 && horaActual <= 19) {
        mensaje = 'Buenas tardes!';
    } else {
        mensaje = 'Buenas noches!';
    }
    respuesta.end(mensaje);
});

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
});
 
