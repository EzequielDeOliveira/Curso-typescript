class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(14, 7, 1998)
aniversario.mes = 8
console.log(aniversario)

class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano = 1970) {
         
    }
}

const aniversarioEs = new DataEsperta(14, 7, 1998)
aniversario.mes = 8
console.log(aniversario)

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {

    }

    public precoDesconto(): number {
        return this.preco * (1 - this.desconto);
    }

    public resumo(): string {
        return `${this.nome} cust R$ ${this.precoDesconto()} (${this.desconto * 100}%)`
    }
}

const prod1 = new Produto("Caneta preta", 4.20)
console.log(prod1);

const prod2 = new Produto("Caneta Azul", 18.80, 0.15)
console.log(prod2)


class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMax: number = 200) {

    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax;

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro("Ford", "Ka", 185);

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-20)
    }
}

const f40 = new Ferrari('F40', 324)

// Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    } 
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10
console.log(pessoa1.idade);

// Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

// Classe abstrata 
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}


class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}

let c1 = new Soma
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())


c1 = new Multiplicacao
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())


// Somente leitura

class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('TU-114', 'PT-ABC')
console.log(turboHelice)