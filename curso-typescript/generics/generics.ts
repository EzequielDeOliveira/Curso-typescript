function echo(obj: any) {
    return obj
}

console.log(echo("Ezequiel").lenght)
console.log(echo(23).lenght)

function echoMelhorado<T>(obj: T): T {
    return obj
}

console.log(echoMelhorado("Ezequiel").length)
console.log(echoMelhorado(23))
console.log(echoMelhorado({ nome: "Ezequiel", idade: 23 }).nome)

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(el => console.log(el))
}

imprimir([2, 2, 3])
imprimir<number>([1, 22, 3])
imprimir<string>(['A', 'B', 'C'])
imprimir<{ nome: string, idade: number }>([
    { nome: "Ezequiel", idade: 23 },
    { nome: "luiza", idade: 27 }
])

type Person = { nome: string, idade: number }
imprimir<Person>([
    { nome: "Ezequiel", idade: 23 },
    { nome: "luiza", idade: 27 }
]);

// Tipo Genérico 
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>("BLA BLA"))

// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) { }
    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 400).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const difereca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(difereca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            return null
        }
    }

    imprimir() {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Naruto', 'Sasuke', 'Sakura')

fila.imprimir()
fila.entrar('Sai')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()

