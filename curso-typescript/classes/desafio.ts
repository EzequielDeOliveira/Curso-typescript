// Exercício 1 - Classe
class Moto {

    constructor(public nome: string, public velocidade: number = 0) { }

    buzinar() {
        console.log('Toooooooooot!')
    }
    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }

}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
abstract class objeto2D {
    constructor(public base: number = 0, public altura: number = 0) { }
    abstract area(): number
}

class Retangulo extends objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

var retangulo = new Retangulo(5, 7);
console.log(retangulo.area())

// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)