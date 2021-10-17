"use strict";
// string
let nome = "Ezequiel";
console.log(nome);
// numbers
let idade = 23;
idade = 23.1;
console.log(idade);
// boolean
let workingHard = true;
// array
let hobbies = [100, "Study", "Sleep"];
console.log(hobbies);
// tuplas
let endereco = ["Av. Principal", 99, ""];
console.log(endereco);
// enums 
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 100] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// funções 
function getName() {
    return nome;
}
console.log(getName());
function HelloWorld() {
    console.log("Hello World");
}
HelloWorld();
function mutiplicar(a, b) {
    return a * b;
}
console.log(mutiplicar(10, 10));
// tipo função
let calculo;
calculo = mutiplicar;
console.log(calculo(10, 20));
// Objetos
let usuario = {
    nome,
    idade
};
console.log(usuario);
function calcularPonto(hour) {
    return hour > 8 ? "Fora do horário" : "Ponto normal";
}
let funcionario = {
    supervisores: ["Ronaldo", "Cristiano"],
    baterPonto: calcularPonto
};
// Union types
let nota = 10;
// never
function falha(msg) {
    throw new Error(msg);
}
//# sourceMappingURL=tipos.js.map