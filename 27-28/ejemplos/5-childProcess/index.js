const { fork } = require('child_process')

const forked = fork('child.js')

forked.on('message', msg => {
    console.log('Mensaje del hijo ', msg)
})

console.log('Comienzo del programa Padre')
setTimeout(() => {
    forked.send({mensaje: 'Hola!'})
},2000)