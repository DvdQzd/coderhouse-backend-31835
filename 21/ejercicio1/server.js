import express from 'express';
import { faker } from '@faker-js/faker';
const app = express();

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

// Desarrollar un servidor basado en Node.js y express que para la ruta '/test' responda con un array de 10 objetos, con el siguiente formato:
// {
//     nombre: '',
//     apellido: '',
//     color: ''
// }

// Los objetos generados tendrán un valor aleatorio para cada uno de sus campos. El valor será obtenido de los siguientes arrays:
// const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
// const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

// Con cada request se obtendrán valores diferentes.

app.get('/test', (req, res) => {
    const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
    const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
    const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];
    const resultado = [];
    for (let i = 0; i < 10; i++) {
        const nombre = nombres[Math.floor(Math.random() * nombres.length)];
        const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
        const color = colores[Math.floor(Math.random() * colores.length)];
        resultado.push({
            nombre,
            apellido,
            color
        });
    }
    res.send(resultado);
});

// Reformar el ejercicio anterior utilizado Faker para generar los objetos con datos aleatorios en español.
// A la ruta '/test' se le podrá pasar por query params la cantidad de objetos a generar.
// Ej: '/test?cant=30'. 
// De no pasarle ningún valor, producirá 10 objetos.
// Incorporarle id a cada uno de los objetos generados en forma incremental, empezando por 1.

app.get('/test_faker', (req, res) => {
    const cantidad = req.query.cant || 10;
    const resultado = [];
    for (let i = 1; i <= cantidad; i++) {
        resultado.push({
            id: i,
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            color: faker.color.human()
        });
    }
    res.send(resultado);
});
