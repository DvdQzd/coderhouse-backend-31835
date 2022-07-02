const express = require('express')
const { Router } = express;

const router = Router();

const mascotas = [
    {
        nombre: 'Pepito',
        edad: 2,
        raza: 'Bulldog',
    },
    {
        nombre: 'Pepita',
        edad: 3,
        raza: 'Bulldog',
    },
]

router.get('/', (req, res) => {
    res.send(mascotas)
});
 
router.post('/', (req, res) => {
    const mascotaAGuardar = req.body;
    mascotas.push(mascotaAGuardar);
    res.status(201).send({status: 'ok'})
});
 

module.exports = router;