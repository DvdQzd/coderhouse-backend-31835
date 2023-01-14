import ApiPalabras from '../api/palabras.js'

class ControladorPalabras {

    constructor() {
        this.apiPalabras = new ApiPalabras()
    }

    obtenerPalabras = async (req,res) => {
        try {
            const id = req.params.id
            //console.log(id)
            const palabras = await this.apiPalabras.obtenerPalabras(id)

            res.send(palabras)
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }

    guardarPalabra = async (req,res) => {
        try {
            const palabra = req.body
            //console.log(Palabra)
            const palabraGuardada = await this.apiPalabras.guardarPalabra(palabra)

            res.json(palabraGuardada)
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }
}

export default ControladorPalabras
