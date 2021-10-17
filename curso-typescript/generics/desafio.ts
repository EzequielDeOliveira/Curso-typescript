// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C, valor: V }

class Mapa<C, V> {
    private items: Array<Par<C, V>> = new Array<Par<C, V>>()

    obter(chave: C) {
        const resultado = this.items.filter(i => i.chave == chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave)
        if(encontrado) {
            encontrado.valor = par.valor
        } else {
            this.items.push(par)
        }
    }

    limpar() {
        this.items = new Array<Par<C, V>>()
    }

    imprimir() {
        console.log(this.items)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()