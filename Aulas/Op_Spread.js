/*
- O operador Spread realiza a junção/concatenação de elementos em listas, coleções e variáveis diferentes.
- Ele pega os atributos de um array e copia para um novo array pegando todos os elementos que estiverem no array.
- Caso tenha mais de um array, o Spread permite pegar todos os elementos diferentes dentro desses arrays e agrega todos em um novo local.

Sintaxe -> ...
*/

// Spread com arrays/listas
// - Vai agregar todos os elementos em um novo array/lista
var lista1 = [1,2,3,4,5]
var lista2 = [6,7,8,9,10]
var lista3 

console.log(lista1)
console.log(lista2)
console.log(...lista1, ...lista2)

// Spread com coleções/collections
/*
- Vai agregar todos os elementos em ambas as coleções
- Neste caso, todas as informações da coleção 2 e os elementos diferentes da coleção 1
- Caso os elementos sejam iguais, ele apenas substituirá as informações pela ultima coleção mencionada
*/
var colecao1 = {Nome: "Rafael", idade: 25, cidade: "São Paulo", residencia: "Apartamento"}
var colecao2 = {Nome: "Antonia", idade: 23, cidade: "Ceara"}
var colecao3 = {...colecao1,...colecao2}

console.log(colecao3)

// Spread com HTML - DOM
/*
- Realizar operações DOM co HTML é muito favorável para a operação Spread porque possibilita diversas operações fora do escopo HTML
- Com HTML é possível realizar algumas operações, mas quando essa função é copiada para um Array, o numero de operações aumenta drasticamente
- Neste caso abaixo as 'divs' do HTML serão copiadas para um Array Javascript que disponibiliza diversas operações fora do escopo HTML
*/
const objetos = document.getElementsByTagName("div")
const objetos2 = [...document.getElementsByTagName("div")]

//Digite 'objetos.' no editor e veja as possibilidades em HTML
//Digite 'objetos2.' no editor e veja as possibilidades em Javascript