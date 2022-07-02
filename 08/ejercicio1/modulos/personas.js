const express = require('express')
const { Router } = express;

const router = Router();

const personas = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 30
    },
    {
        nombre: 'Pedro',
        apellido: 'González',
        edad: 40
    },
]

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});


router.get('/', (req, res) => {
    res.send(personas)
});
 
router.post('/', (req, res) => {
    const personaAGuardar = req.body;
    personas.push(personaAGuardar);
    res.status(201).send({status: 'ok'})
});
 

module.exports = router;