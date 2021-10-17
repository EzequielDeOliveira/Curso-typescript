import $ from 'jquery'
import Livro from "./modelo/livro";

const livro = new Livro('The vampire Diaries', 100.00, 0.20);
//console.log(livro.precoComDesconto())

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`)
