const fs = require('fs');

const data = fs.readFileSync('./texto_ejemplo.txt', 'utf-8');
console.log(data);

// fs.writeFileSync('./ejemplo_write_nuevo.txt', 'Esto es un ejemplo\n');

fs.appendFileSync('./ejemplo_append.txt', 'Hola Rodolfo!\n');


try{
    fs.unlinkSync('./ejemplo_write_nuevo.txt');
} catch (error) {
    console.log('Hubo un error', error);
}