interface Humano {
    nome: string
    idade?: number
    [props: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome)
}


function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Ronaldo'
}

const pessoa: Humano = {
    nome: 'Ezequiel',
    idade: 23,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Salvatore')
//saudarComOla({ nome: 'Ronaldo', idade: 30 })

// Usando classes

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente
meuCliente.nome = 'Klaus'
saudarComOla(meuCliente)
meuCliente.saudar('Mickaelson')
console.log(meuCliente.ultimaCompra)


// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = (base: number, exp: number): number  => {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void { }
}

class RealAB implements A, B {
    a(): void { }
    b(): void { }
}

class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}


abstract class AbstrataABD implements A, B {
    a(): void { }
    b(): void { }
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()





