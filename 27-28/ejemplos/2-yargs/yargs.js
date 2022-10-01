const yargs = require('yargs/yargs')(process.argv.slice(2))

const argv = yargs
    .boolean('vivo')
    .alias({
        n: 'nombre',
        a: 'apellido',
        v: 'vivo'
    })
    .default({
        nombre: 'pepe',
        apellido: 'copado',
        vivo: true
    })
    .argv

console.log(argv)
