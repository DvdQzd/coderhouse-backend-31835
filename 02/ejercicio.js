// Definir la función mostrarLista que reciba una lista de datos y muestre su contenido,
// si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”.
// Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
// Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente,
// pasando una lista con 3 números como argumento.


function mostrarLista(lista = []) {
    if(lista.length == 0){
        console.log('Lista Vacia')
    } else {
        console.log({lista})
    }
}

mostrarLista([1, 2, 3, 4]);

(function (lista = []) {
    if(lista.length == 0){
        console.log('Lista Vacia')
    } else {
        console.log({lista})
    }
})([5, 6, 7, 8]);


// Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima
// que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la
// función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

function crearMultiplicador(numero1) {
    return function(numero2){ // funcion anonima
        return numero1 * numero2; // funcion que multiplica los numeros
    }
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
const porVeinteMil = crearMultiplicador(20000);


console.log(duplicar(4)); // 8
console.log(triplicar(6)); // 18
console.log(porVeinteMil(3));