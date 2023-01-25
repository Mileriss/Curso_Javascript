/*
- É um método que disponibiliza opções de manipulação para todos os elementos que estiverem dentro de um array
- Funciona com a mesma lógica de um loop FOR, porem, não há condições de parar o loop, com o MAP todos os elementos serão alterados/manipulados
- Permite tambem o uso de funções de Javascript e manipula métodos DOM

Sintaxe:
- Funciona com 2 parametros indicando o ELEMENTO e o INDICE do elemento para manipulação

const <array> = ['item0','item1','item2','item3']
<array>.map((<elemento>,<indice>)<arrow-function>{

})
*/

//Exemplo simples
const cursos = ['HTML','CSS','Javascript','React']
cursos.map((elemento,indice)=>{
    console.log("Elemento: " + elemento +  " - " + "indice: " + indice)
})

//Exemplo com DOM
//- Para ver o resultado é necessário abrir o arquivo HTML e linkar o código
let tags = document.getElementsByTagName("div")
tags = [...tags]
tags.map((elemento, indice)=>{
    document.write("O elemento: " + elemento.innerText + " esta no indice: " + indice + "<br>")
    console.log("O elemento: " + elemento.innerText + " esta no indice: " + indice)
})

//Realizando operações nos elementos

//Convertendo o Tipo
let num=['1','2','3','4','5']
console.log(num) // -> Vai exibir os numeros como STRINGS
const converterINT=(n)=>parseInt(n)
let num2=['1','2','3','4','5'].map(converterINT)
console.log(num2) // -> Vai converter os numeros para INT

//Dobrando os valores
const converter=(numeros)=>parseInt(numeros) // -> Vai converter para INT
const multiplicar=(numeros)=>numeros*2 // -> Vai multiplicar por 2 os numeros armazenados
let lista_num=['10','20','30','40','50'].map(multiplicar) // -> Vai realizar o MAP
console.log(lista_num) // -> Vai exibir o resultado convertido


