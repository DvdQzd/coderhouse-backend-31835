class Contenedor {
    constructor(elemento){
        this.elemento = elemento;
    }

    agregar(elemento){}

    eliminar(elemento){}

    obtener(elemento){}
}

class Producto extends Contenedor{
    constructor(elemento){
        super(elemento);
    }

    editar(elemento){}
}

class Carrito extends Contenedor{
    constructor(elemento){
        super(elemento);
    }

    agregar(elemento){
        // agrego de otra forma
    }
}