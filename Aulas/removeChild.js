/*
- Permite que você retire elementos de uma div 'pai'
- É possível retirar qualquer elemento da página dependendo das condições que forem propostas

Sintaxe: removeChild()

Arquivo utilizado: html_padrao.html
*/

//* Indicando o caminho para a DIV com ID "caixa"
const caixa = document.getElementById("caixa")

//* Criando um novo elemento
const novo_elemento = document.createElement("div")
novo_elemento.setAttribute("id", "novo-elemento")
novo_elemento.setAttribute("class", "nova-classe")
novo_elemento.style.fontWeight = "bold"
novo_elemento.innerHTML = "Novo Elemento"
novo_elemento.style.cursor = "pointer"

//* Adicionando o novo elemento a DIV "caixa"
caixa.appendChild(novo_elemento)

//* Removendo o elemento da DIV "caixa"
// caixa.removeChild(novo_elemento)

//* Removendo o elemento com um evento de clique
novo_elemento.addEventListener("click", ()=>{
    caixa.removeChild(novo_elemento)
})

