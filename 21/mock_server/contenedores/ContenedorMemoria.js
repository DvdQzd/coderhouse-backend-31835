class ContenedorMemoria {
    constructor() {
        this.lista = []
    }

    guardar(objeto) {
        this.lista.push(objeto)
        return objeto
    }

    obtenerTodos() {
        return this.lista
    }
}

export default ContenedorMemoria