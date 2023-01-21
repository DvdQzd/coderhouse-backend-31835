import * as personas from './personasService.js'

export function getPersonas({ campo, valor }) {
    return personas.getPersonas(campo, valor)
}

export function getPersona({ id }) {
    return personas.getPersona(id)
}

export function createPersona({ datos }) {
    return personas.createPersona(datos)
}

export function updatePersona({ id, datos }) {
    return personas.updatePersona(id, datos)
}

export function deletePersona({ id }) {
    return personas.deletePersona(id)
}