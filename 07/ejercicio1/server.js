const express = require("express");

const app = express();

const server = app.listen(8080, () => {
    console.log("App escuchando en puerto 8080");
});

// Dada la siguiente constante: const frase = 'Hola mundo cómo están'
// Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

// 1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
// 2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
// 3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.

const frase = 'Hola mundo cómo están';

app.get('/api/frase', (req, res) => res.send({frase}));

app.get('/api/letras/:num', (req, res) => {
    const { num } = req.params;
    console.log({num})
    if(isNaN(num)){
        res.status(400).send({error: 'El parámetro no es un número'});
        return
    }
    if(num > frase.length){
        res.status(400).send({error: 'El parámetro está fuera de rango'});
        return
    }
    res.send({letra: frase[num - 1]});
})

app.get('/api/palabras/:num', (req, res) => {
    const { num } = req.params;
    if(isNaN(num)){
        res.status(400).send({error: 'El parámetro no es un número'});
        return
    }

    const palabras = frase.split(' ');

    if(num > palabras.length){
        res.status(400).send({error: 'El parámetro está fuera de rango'});
        return
    }
    res.send({letra: palabras[num - 1]});
});