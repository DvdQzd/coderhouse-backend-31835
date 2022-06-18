function saludo (nombre) {
    console.log(`Hola ${nombre}`);
}

saludo('Rodolfo') // Hola Rodolfo

const variableSaludo = function (nombre) {
    console.log(`Hola ${nombre}`);
}

variableSaludo('Rodolfo') // Hola Rodolfo

const promedio = (a, b) => {
    return (a + b) / 2;
}

promedio(3, 4);

const promedioCorto = (a, b) => (a + b) / 2;

const numeros = [2, 3, 4, 5, 6]; // [3, 4, 5, 6, 7]


const resultado = numeros.map(numero => numero + 1);

console.log({numeros})
console.log({resultado})