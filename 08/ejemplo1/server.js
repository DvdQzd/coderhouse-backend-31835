const express = require('express');
const recurso = require('./recurso');

const app = express();

app.use('/api', recurso);

app.listen(8080, () => console.log('Servidor OK puerto 8080'));
 