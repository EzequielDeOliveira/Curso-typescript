"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Ronaldo';
}
const pessoa = {
    nome: 'Ezequiel',
    idade: 23,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Salvatore');
//saudarComOla({ nome: 'Ronaldo', idade: 30 })
// Usando classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Klaus';
saudarComOla(meuCliente);
meuCliente.saudar('Mickaelson');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = (base, exp) => {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
//# sourceMappingURL=interfaces.js.map