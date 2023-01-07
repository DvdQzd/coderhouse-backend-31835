export class Tiempo {
    constructor(claseDate) {
        this.tiempo = claseDate
    }

    getFormattedNow() {
        return `el instante preciso es: ${this.tiempo.now()}`
    }

    getNow() {
        return this.tiempo.now()
    }
}