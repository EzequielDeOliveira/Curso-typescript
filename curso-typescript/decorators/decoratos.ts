function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
    return valor ? logarClasseSe : decoratorVazio
}

function decorator(obj: { a: string, b?: number }) {
    return function (_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

interface Eletrodomestico {
    imprimir?(): void
}

@logarObjeto
@logarClasse
@imprimivel
class Eletrodomestico {
    constructor(){
        console.log('Novo....')
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}

new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()


const usuarioLogado = {
    nome: 'Ezequiel De Oliveira',
    email: 'ezequiel@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo critico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            }
        }
    }
}