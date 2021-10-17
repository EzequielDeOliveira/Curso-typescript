"use strict";
function echo(obj) {
    return obj;
}
console.log(echo("Ezequiel").lenght);
console.log(echo(23).lenght);
function echoMelhorado(obj) {
    return obj;
}
console.log(echoMelhorado("Ezequiel").length);
console.log(echoMelhorado(23));
console.log(echoMelhorado({ nome: "Ezequiel", idade: 23 }).nome);
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(el => console.log(el));
}
imprimir([2, 2, 3]);
imprimir([1, 22, 3]);
imprimir(['A', 'B', 'C']);
imprimir([
    { nome: "Ezequiel", idade: 23 },
    { nome: "luiza", idade: 27 }
]);
imprimir([
    { nome: "Ezequiel", idade: 23 },
    { nome: "luiza", idade: 27 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho("BLA BLA"));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 400).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const difereca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(difereca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Naruto', 'Sasuke', 'Sakura');
fila.imprimir();
fila.entrar('Sai');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
//# sourceMappingURL=generics.js.map