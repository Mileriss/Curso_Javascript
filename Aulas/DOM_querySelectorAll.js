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
Query - Significa um tipo, atributo, classe ou elemento
- Vai retornar e armazenar em uma coleção todos os elementos quem estiverem armazenados em determinada "Query" 
- Tem a mesma funcionalidade dos metodos DOM getElements, porem, querySelector deixa mais dinamico
- Permite interagir com todos os tipos (Classe, ID, Tags e etc..)

Sintaxe: querySelectorAll("<nome-query>")
*/

//Retornando uma TAG
let tag = [...document.querySelectorAll("div")]
console.log(tag)
tag.map((elementos)=>{
    document.write("Elementos da <b>TAG</b> DIV: " + elementos.innerText + "<br>")
})

document.write("<br>")

//Retornando uma CLASS
let classe = [...document.querySelectorAll(".exemplos")]
console.log(classe)
tag.map((elementos)=>{
    document.write("Elementos da <b>CLASSE</b> exemplos: " + elementos.innerText + "<br>")
})

document.write("<br>")

//Retornando um ID
let id = [...document.querySelectorAll("#ex2")]
console.log(id)
id.map((elementos)=>{
    document.write("Elementos do <b>ID</b> ex2: " + elementos.innerText + "<br>")
})

document.write("<br>")

//Retornando um ID e uma Class
let id_class = [...document.querySelectorAll("#ex2, .exemplos")]
console.log(id_class)
id_class.map((elementos)=>{
    document.write("Elementos do <b>ID</b> ex2 e <b>CLASSE</b> exemplos: " + elementos.innerText + "<br>")
})

document.write("<br>")

//Retornando uma tag que está dentro de uma tag
let tag_tag = [...document.querySelectorAll("div > p")]
console.log(tag_tag)
tag_tag.map((elementos)=>{
    document.write("Elementos da <b>TAG</b> p que estão dentro da <b>TAG</b> div: " + elementos.innerText + "<br>")
})