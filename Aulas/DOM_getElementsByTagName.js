/*
- As funções e comandos javascript podem ser utilizados no lado "Cliente" utilizando os Elementos DOM
- São utilizados para manipular os elementos HTML e criar interações no documento/página
- Para visualizar o resultado deste código é necessário fazer o procedimento abaixo:
1 - Vá até o arquivo "html_DOM.html"
2 - Localize a tag <script>
3 - Altere o documento para o que você deseja visualizar
4 - Clique com o botão direito e acesse a opção "Open with live server"
*/

//- Permite que você armazene todos os elementos de uma determinada tag em uma coleção
//- Desta forma o programa disponibiliza as funções disponíveis de uma coleção para manipular os elementos
//Sintaxe: document.getElementsByTagName("<nome-tag>")

//Armazenando os elementos em uma coleção
const colecao_elementos = document.getElementsByTagName("div")
//document.write(colecao_elementos)

//Convertendo a coleção para um Array (Libera muitas funções)
const array_elementos = [...document.getElementsByTagName("div")]

//Alterando o texto do elemento no indice 0 da lista
array_elementos[0].innerHTML = "Exemplo"

//Alterando a cor do elemento no indice 1 da lista
array_elementos[1].style.color = "red"

//Alterando o tamanho do elemento no indice 2 da lista
array_elementos[2].style.fontSize = "30px"

//Alterando o estilo de fonte do elemento no indice 3 da lista
array_elementos[3].style.fontFamily = "Calibri"

//Alterando diversos atributos do elemento no indice 4 da lista
array_elementos[4].style="color: green; font-size: 40px; font-family: Arial; background-color: black; border: 2px solid blue; border-radius: 20%; box-shadow: 0 0 20px purple;"

