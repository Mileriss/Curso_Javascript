/*
- As funções e comandos javascript podem ser utilizados no lado "Cliente" utilizando os Elementos DOM
- São utilizados para manipular os elementos HTML e criar interações no documento/página
- Para visualizar o resultado deste código é necessário fazer o procedimento abaixo:
1 - Vá até o arquivo "html_DOM.html"
2 - Localize a tag <script>
3 - Altere o documento para o que você deseja visualizar
4 - Clique com o botão direito e acesse a opção "Open with live server"
*/

/*
- createElement possibilita que você crie novos elementos na página e manipule eles da forma que você desejar
- É possível criar qualquer tipo de elemento, adicionar ID´s, Classes, Atributos e utilizar as funções DOM
*/

//* Pegando a div 'pai' com a classe "caixa"
const caixa = document.querySelector("#caixa")

//* Criando o elemento e indicando alguns atributos
const novo_elemento = document.createElement("div") //! -> Cria um elemento do tipo "Div"
novo_elemento.innerHTML = "Exemplo 6" //! -> Atribui o texto "Exemplo 6"
novo_elemento.setAttribute("id","exemplo6") //! -> Atribui um id nomeado exemplo6
novo_elemento.setAttribute("class","exemplos exemplo6") //! -> Atribui as classes exemplos e exemplo6
novo_elemento.style.backgroundColor = "lightblue" //! -> Atribui a cor de fundo como azul claro
caixa.appendChild(novo_elemento) //! -> A div "Caixa" vai adicionar esse novo elemento a página

//* Criando varios elementos através de uma lista
const lista_items = ["Exemplo 7", "Exemplo 8", "Exemplo 9", "Exemplo 10"]

lista_items.map((elementos, indice)=>{
    const novos_elementos = document.createElement("div")
    novos_elementos.setAttribute("id","exemplo"+ (indice+7))
    novos_elementos.setAttribute("class","exemplos")
    novos_elementos.innerHTML = elementos
    caixa.appendChild(novos_elementos)
})