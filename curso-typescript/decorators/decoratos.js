"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasseSe : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('Novo....');
    }
};
Eletrodomestico = __decorate([
    logarObjeto,
    logarClasse,
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
const usuarioLogado = {
    nome: 'Ezequiel De Oliveira',
    email: 'ezequiel@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo critico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
//# sourceMappingURL=decoratos.js.map