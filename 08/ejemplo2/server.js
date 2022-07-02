const express = require('express');

const app = express();

app.listen(8080, () => console.log('Servidor OK puerto 8080'));

app.use('/paginas_estaticas', express.static('public'));