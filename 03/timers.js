// console.log('inicio');
// setTimeout((nombre) => {
//     console.log(`Hola ${nombre}`);
//     console.log('fin');
// }, 2000, 'Rodolfo');

// setInterval(() => console.log('Hola'), 1000);

let i = 0;
const intervalId = setInterval(() => {
    console.log('mensaje');
    i++;
    if (i == 5) {
        clearInterval(intervalId);
    }
}, 1000);

