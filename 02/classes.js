// una clase es una estructura de datos que se utiliza para almacenar datos que pueden ser accedidos y modificados por medio de métodos.
class Persona {
    constructor(nombre, edad) { // el metodo constructor es el primer metodo que se ejecuta cuando se crea una instancia de la clase
        this.nombre = nombre
        this.edad = edad
    }
 
    static saludoCorto = 'hola' // esta variable es una propiedad de la clase, no de la instancia
 
    saludoCompleto() { // este metodo es un metodo de la clase, el cual hara uso de atributos de la clase
        console.log(`buenaaass, soy ${this.nombre}, mi edad es ${this.edad}`)
    }
 
    saludoEstatico() { // este metodo es un metodo estatico, el cual hara uso de la propiedad estatica
        console.log(Persona.saludoCorto)
    }
 }

const rodolfo = new Persona('Rodolfo', 20); // se crea una instancia de la clase Persona
const david = new Persona('David', 33); // se crea una instancia de la clase Persona

console.log(rodolfo) // muestra por pantalla: Persona { nombre: 'Rodolfo', edad: 20 }
rodolfo.saludoCompleto() // muestra por pantalla: buenaaass, soy Rodolfo, mi edad es 20
rodolfo.saludoEstatico() // muestra por pantalla: hola
console.log(david) // muestra por pantalla: Persona { nombre: 'David', edad: 33 }
david.saludoCompleto() // muestra por pantalla: buenaaass, soy David, mi edad es 33
david.saludoEstatico() // muestra por pantalla: hola

 