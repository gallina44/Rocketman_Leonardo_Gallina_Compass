import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

//const expect = chai.expect

// Chai
//describe('Meu primeiro teste', () =>{
    //it.only('Verificar a variável "aux" ', () =>{
        //let aux = 2
        //assert.strictEqual(aux, 2)
        //expect(aux).to.be.equals(2).to.be.a('number')
    //})
    // Mocha
    //it('Verificar uma desigualdade', () =>{
        //let aux = 2
        //assert.notStrictEqual(aux, 3)
    //})
//})

////////////////////////////////////////////////////////////////

//Calculadora

const expect = chai.expect

describe('Testes de soma', () =>{
    it('Deve somar 4 e 5, resultando em 9', () =>{ 
       let resultado = Calculadora.soma(4, 5)
       expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5, resultando em 1', () =>{ 
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
     })
})

describe('Teste de subtração', () => {
    it('Deve subtrair 4 e 5, resultando em -1', () =>{ 
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
     })
})

describe('Teste de multiplicação', () => {
    it('Deve multiplicar 4 e 5, resultando em 20', () =>{ 
        let resultado = Calculadora.mult(4, 5)
        expect(resultado).to.be.eq(20)
     })
})

describe('Teste de divisão', () => {
    it('Deve dividir 10 e 2, resultando em 5', () =>{ 
        let resultado = Calculadora.div(10, 2)
        expect(resultado).to.be.eq(5)
     })
})