// Realizar un programa de backend que establezca sesiones de usuarios en el servidor.
// Cuando un cliente visita el sitio por primera vez en la ruta 'root', se presentará el mensaje de “Te damos la bienvenida”. 
// Con los siguientes request de ese mismo usuario, deberá aparecer el número de visitas efectuadas. El cliente podrá ingresar por query params el nombre, en cuyo caso se añadirá a los mensajes devuelto.
// Por ejemplo: “Bienvenido Juan” o “Juan visitaste la página 3 veces”. Ese nombre sólo se almacenará la primera vez que el cliente visite el sitio.

const express = require('express');
const app = express();
const session = require('express-session');

const PORT = 3000;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    if (req.query.name) {
        if (req.session.visitas) {
            req.session.visitas++;
            res.send(`${req.query.name} visitaste la página ${req.session.visitas} veces`);
        } else {
            req.session.visitas = 1;
            res.send(`Bienvenido ${req.query.name}`);
        }
        
    } else {
        res.send('Te damos la bienvenida');
    }
});

// Se dispondrá de una ruta 'olvidar' que permita reiniciar el proceso de visitas para el usuario.
// En caso de que no haya error, se retornará el mensaje “Hasta luego” más el nombre del cliente (de existir); caso contrario un objeto con el siguiente formato: { error : descripción }.
// Luego de requerir esa ruta, el efecto será como el de visitar el sitio por primera vez.

// NOTA1: Utilizar el middleware express como estructura de servidor.
// NOTA2: Generar los request con varios navegadores (Chrome, edge, Firefox) para simular los distintos clientes en forma local.

app.get('/olvidar', (req, res) => {
    if (req.query.name) {
        req.session.destroy();
        res.send(`Hasta luego ${req.query.name}`);

    } else {
        res.send({ error: 'No se ha ingresado nombre' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});