import ApiNoticias from '../api/noticias.js'

class ControladorNoticias {

    constructor() {
        this.apiNoticias = new ApiNoticias()
    }

    obtenerNoticias = async (req,res) => {
        try {
            const id = req.params.id
            //console.log(id)
            const noticias = await this.apiNoticias.obtenerNoticias(id)

            res.send(noticias)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }

    guardarNoticia = async (req,res) => {
        try {
            const noticia = req.body
            //console.log(Noticia)
            const noticiaGuardada = await this.apiNoticias.guardarNoticia(noticia)

            res.json(noticiaGuardada)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }

    actualizarNoticia = async (req,res) => {
        try {
            const noticia = req.body
            const id = req.params.id
            //console.log(Noticia)
            const noticiaActualizada = await this.apiNoticias.actualizarNoticia(id,noticia)
            res.json(noticiaActualizada)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }

    borrarNoticia = async (req,res) => {
        try {
            const id = req.params.id
            const noticiaBorrada = await this.apiNoticias.borrarNoticia(id)
            res.json(noticiaBorrada)
        }
        catch(error) {
            console.log('error obtenerNoticias', error)
        }
    }
}

export default ControladorNoticias
