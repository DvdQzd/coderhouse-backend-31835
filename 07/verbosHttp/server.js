const express = require("express");

const app = express();

const server = app.listen(8080, () => {
    console.log("App escuchando en puerto 8080");
});

const users = ['pedro', 'juan', 'diego'];

// GET

app.get('/users', (req, res) => {
    //http://localhost:8080/users?age=18&country=mexico
    const { age, country } = req.query;

    const user = // busqueda por edad y pais
    res.status(200).send(users);
});

app.get('/users/:index', (req, res) => {
    const { index } = req.params;
    
    const user = users[index];

    res.status(200).send(user);
})

app.post('/users', (req, res) => {
    // crear usuario
    const datosUsuario = req.body;
    crearUsuario(datosUsuario);
})


