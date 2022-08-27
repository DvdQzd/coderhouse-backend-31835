const Calculadora = require('./Calculadora.js');

describe('Nuestra calculadora', () => {
    test("SUMA", () => {
        const resultado = Calculadora.suma(2, 3);
        expect(resultado).toEqual(5);
    })

});