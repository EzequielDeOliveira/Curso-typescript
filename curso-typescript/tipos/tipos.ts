// string
let nome: string = "Ezequiel"
console.log(nome)

// numbers
let idade: number = 23
idade = 23.1
console.log(idade)

// boolean
let workingHard: boolean = true

// array
let hobbies: any[] = [100, "Study", "Sleep"]
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ["Av. Principal", 99, ""]
console.log(endereco)

// enums 
enum Cor {
    Cinza,
    Verde,
    Azul = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)


// any
let carro: any = "BMW"
console.log(carro)
carro = { marca: "BMW", ano: 2019 }
console.log(carro)

// funções 

function getName(): string {
    return nome;
}
console.log(getName())

function HelloWorld(): void {
    console.log("Hello World");
}
HelloWorld()

function mutiplicar(a: number, b: number): number {
    return a*b;
}
console.log(mutiplicar(10, 10))

// tipo função
let calculo: (numA: number, numB: number) => number
calculo = mutiplicar
console.log(calculo(10,20))

// Objetos
let usuario: { nome: string, idade: number} = {
    nome,
    idade
}
console.log(usuario)

// Desafio

// alias
type Funcionario = {supervisores: string[], baterPonto: (hour: number) => string}

function calcularPonto(hour: number): string {
    return hour > 8? "Fora do horário" : "Ponto normal"
}

let funcionario: Funcionario = {
    supervisores: ["Ronaldo", "Cristiano"],
    baterPonto: calcularPonto
}

// Union types
let nota: number | string = 10;

// never
function falha(msg: string): never {
    throw new Error(msg)
}

// null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}