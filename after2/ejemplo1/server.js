const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/user/:id', (req, res) => { // localhost:8080/user/2?pais=brazil&edad=40
    // req.params
    const userId = req.params.id;
    // req.query
    const { pais, edad } = req.query;
    // req.body
    const { nombre, apellido, estatura } = req.body;
})

app.listen(8080, () => console.log('servidor OK'))
