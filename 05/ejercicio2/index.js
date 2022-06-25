const moment = require('moment');

// Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

// Un ejemplo de salida:
// Hoy es 11/01/2021
// Nací el 29/11/1968
// Desde mi nacimiento han pasado 52 años.
// Desde mi nacimiento han pasado 19036 días.

// Ayuda:
// Utilizar los métodos diff y format de la librería moment.


const dateOfBirth = moment(new Date('1988/08/17')).format('YYYY-MM-DD');
const today = moment();
const yearsSinceBirth = today.diff(dateOfBirth, 'years');
const daysSinceBirth = today.diff(dateOfBirth, 'days');
console.log({yearsSinceBirth});
console.log({daysSinceBirth});

