// Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
// Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
// Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.

const texto = '¡Hola!';
const fin = () => console.log('terminé');

const mostrarLetras = (texto, callback) => {
    let i = 0;
    const intervalId = setInterval(() => {
        if(i < texto.length) {
            console.log(texto[i]);
            i++;
        } else {
            clearInterval(intervalId);
            callback();
        }
    }, 1000);
}

setTimeout(() => mostrarLetras(texto, fin), 0);
setTimeout(() => mostrarLetras(texto, fin), 250);
setTimeout(() => mostrarLetras(texto, fin), 1000);