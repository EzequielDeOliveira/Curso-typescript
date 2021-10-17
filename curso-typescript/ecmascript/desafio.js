"use strict";
// Desafio
// 1 
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// 2
const dizerOla = (nome = "Pessoa") => console.log(`Ola, ${nome}`);
dizerOla();
dizerOla("Ezequiel");
// 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// 4
const array = [55, 20, ...nums];
console.log(array);
// 5
const notas = [8.5, 6.3, 9.4];
const [n1, n2, n3] = notas;
console.log(n1, n2, n3);
const cientista = {
    primeiroNome: "Ezequiel",
    xp: 5
};
const { primeiroNome, xp } = cientista;
console.log(primeiroNome, xp);
//# sourceMappingURL=desafio.js.map