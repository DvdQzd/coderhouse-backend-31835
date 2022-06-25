const fs = require('fs');

console.log('inicio escritura'); // 1

fs.writeFile('./nuevo_archivo.txt', 'texto de prueba\n', error => {
    if(error){
        console.log('Hubo un error');
    } else {
        console.log('escribimos el archivo correctamente!'); // 2
        console.log('fin escritura'); // 3

        fs.readFile('./nuevo_archivo.txt', 'utf-8', (error, contenido) => {
            if(error){
                console.log('Hubo un error');
            } else {
                console.log({ contenido });
            }
        });
    }
});

fs.promises.writeFile('./nuevo_archivo2.txt', 'texto de prueba2\n')
    .then(() => {
        console.log('escribimos el archivo correctamente!')
        fs.promises.readFile('./nuevo_archivo2.txt', 'utf-8')
            .then(contenido => console.log({ contenido }))
            .catch(() => console.log('Hubo un error'))
    })
    .catch(() => console.log('hubo un error al escribir'))


async function leerArchivo (ruta) {
    try{
        console.log('obteniendo response');
        const response = await fs.promises.readFile(ruta, 'utf-8');
        console.log({ response })
    } catch (error) {
        console.log('Hubo un problema: ', error);
    }
}

leerArchivo('./nuevo_archivo22.txt');

