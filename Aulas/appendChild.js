/*
- Essa função permite que você adicione elementos a uma div já criada na página
- É possível manipular um elemento da forma que desejar e depois adicionar ele a qualquer outro elemento 'pai'

Sintaxe: appendChild(<nome-elemento>)

Arquivo utilizado: html_padrao.html
*/

//* Indicando o caminho para a div com o ID "caixa"
const caixa = document.getElementById("caixa")

//* Criando um novo elemento
const novo_elemento = document.createElement("div") //!Cria um novo elemento DIV
novo_elemento.setAttribute("id", "novo-elemento") //!Atribui um novo ID
novo_elemento.setAttribute("class", "nova-classe") //!Atribui uma nova Classe
novo_elemento.innerHTML = "Novo Elemento" //!Atribui um conteudo de textoç

caixa.appendChild(novo_elemento) //!Adiciona o novo elemento a DIV "caixa"