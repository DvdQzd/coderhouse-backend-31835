// A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

// const min = 1;
// const max = 20;

// const output = {};

// for (let i = 0; i < 10000; i++) {
//     let numero = Math.floor(Math.random() * (max - min) + min);
    
//     if(output[numero]) {
//         output[numero]++;
//     } else {
//         output[numero] = 1;
//     }
// }

// console.log(output);


// Y obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

// Aclaración: todos los valores monetarios serán expresados con 2 decimales

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
];

const nombresProductos = productos.map(p => p.nombre).join(', ');
const precioTotal = productos.map(p => p.precio).reduce((a, b) => a + b, 0).toFixed(2);
const precioPromedio = (precioTotal / productos.length).toFixed(2);
const productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
const productoConMenorPrecio = productosOrdenados[0];
const productoConMayorPrecio = productosOrdenados[productosOrdenados.length - 1];

const resultado = {
    nombresProductos,
    precioTotal,
    precioPromedio,
    productoConMenorPrecio,
    productoConMayorPrecio
}

console.log({ resultado });
