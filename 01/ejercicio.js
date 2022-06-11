// Definir variables variables que almacenen los siguiente datos:
// Un nombre: “pepe”
// Una edad: 25
// Un precio: $99.90
// Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
// Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
// Mostrar todos esos valores por consola
// Incrementar la edad en 1 y volver a mostrarla
// Agregar una serie a la lista y volver a mostrarla


const nombre = 'pepe';
let edad = 25;
const precio = 99.90
const seriesFavoritas = ['Dark', 'The Boys', 'Kenobi'];

const peliculasFavoritas = [
    {
        nombre: 'Star Wars',
        estreno: '1977',
        protagonistas: ['Luke', 'Leia', 'Han']  
    },
    {
        nombre: 'Star Wars',
        estreno: '1977',
        protagonistas: ['Luke', 'Leia', 'Han']  
    },
    {
        nombre: 'Star Wars',
        estreno: '1977',
        protagonistas: ['Luke', 'Leia', 'Han']  
    },
    {
        nombre: 'Star Wars',
        estreno: '1977',
        protagonistas: ['Luke', 'Leia', 'Han']  
    }
]

console.log({nombre});
console.log({edad});
console.log({precio});
console.log({seriesFavoritas});
console.log({peliculasFavoritas});
edad++;
console.log({edad});
seriesFavoritas.push('Arrow');
seriesFavoritas.unshift('Silicon Valley');
console.log({seriesFavoritas});

console.log(peliculasFavoritas);