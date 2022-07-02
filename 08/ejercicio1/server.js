const express = require('express');
const mascotas = require('./modulos/mascotas');
const personas = require('./modulos/personas');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
  
app.use('/api/mascotas', mascotas);
app.use('/api/personas', personas);

app.use('/static', express.static(__dirname + '/public'))

app.listen(8080, () => console.log('Servidor OK puerto 8080'));
