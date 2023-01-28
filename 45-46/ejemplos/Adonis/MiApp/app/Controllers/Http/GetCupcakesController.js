'use strict'

const Cupcake = use('App/Models/Cupcake')

class GetCupcakesController {
    async index({ view }) {
        const result = await Cupcake.all()
        const cupcakes = result.toJSON()
        return view.render('ListaCupcakes', { cupcakes })
    }
}

module.exports = GetCupcakesController
