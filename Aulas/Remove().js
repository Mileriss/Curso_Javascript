/* 
REMOVE - é uma função utilizada para remover elementos DOM em uma aplicação.
Caso seja necessário, é possível remover determinados elementos dentro de uma aplicação e essa função facilita esse processo.
Em caso de remoção de elemento, não é possível recupera-lo com CTRL-Z por exemplo, ele será retirado efetivamente dependendo da condição
*/

var botao = document.getElementById("botao")
var caixa = document.getElementById("caixa")

botao.addEventListener("click",()=>{
    caixa.remove()
})