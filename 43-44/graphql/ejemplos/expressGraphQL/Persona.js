export default class Persona {
    constructor(id, { nombre, edad }) {
        this.setId(id)
        this.setNombre(nombre)
        this.setEdad(edad)
    }

    setId(id) {
        if (!id) throw new Error('el campo id es obligatorio')
        this.id = id
    }

    setNombre(nombre) {
        if (!nombre) throw new Error('el campo nombre es obligatorio')
        this.nombre = nombre
    }

    setEdad(edad) {
        if (!edad) throw new Error('el campo edad es obligatorio')
        this.edad = edad
    }
}