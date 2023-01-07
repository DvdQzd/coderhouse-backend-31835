{
    texto: '',
        autor: {
        email: '',
            nombre: '',
        ....
    }
}


Repositorio:


// tabla mensajes
Mensaje: {
    id:
    texto:
}

// tabla autores
Autor: {
    id:
    email:
}

const m = daoMensajes.find(idMensaje)
const a = daoAutores.find(emailAutor)

return new Mensaje({ ...m, autor: new Autor(a) })


