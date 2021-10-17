"use strict";
// let & const 
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco!";
    console.log(acao);
}
const cpf = "123.456.789-000";
console.log(cpf);
var segredo = 'externo!';
function revelar() {
    const segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom("Ezequiel");
//this
function normalComThis() {
    console.log(this);
}
const normalComThisEspecial = normalComThis.bind({ nome: "Ezequiel" });
normalComThisEspecial();
// this??
console.log(this);
const arrowComThis = () => console.log(this);
arrowComThis;
const arrowComThisEspecial = arrowComThis.bind({ nome: "Ezequiel" });
arrowComThisEspecial();
// Parâmetro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);
// Rest & Spread
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 3, -1];
console.log(Math.max(...numbers));
const A = [1, 2, 3, 4, 5];
const B = [5, 6, 7, 8, ...A, 9];
console.log(B);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(5, 8, 2, 7, 5, 7, 9, -65);
console.log(numeros);
console.log(retornaArray(...numbers));
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (Array)
const animais = ['gato', 'cachorro'];
/* const pet1 = animais[0];
const pet2 = animais[1]; */
const [pet1, pet2] = animais;
console.log(pet1, pet2);
// Destructing (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: "Importado"
    }
};
/* const nomeItem = item.nome;
const preco = item.preco; */
const { nome: n, preco, caracteristicas: { w } } = item;
console.log(n, preco, w);
const usuarioId = 'suport';
const notificacoes = '9';
const boasVindas = 'Boas vindas ' + usuarioId + 'Notificacoes: ' + notificacoes;
const boasVindas2 = `
Boas vindas ${usuarioId},
Notificações: ${parseInt(notificacoes)}`;
console.log(boasVindas);
console.log(boasVindas2);
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback("3s depois...");
    }, 3000);
}
esperar3s((resultado) => console.log(resultado));
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3s depois promise...");
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title));
//# sourceMappingURL=ecmascript.js.map