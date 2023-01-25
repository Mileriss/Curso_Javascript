/*
- As funções e comandos javascript podem ser utilizados no lado "Cliente" utilizando os Elementos DOM
- São utilizados para manipular os elementos HTML e criar interações no documento/página
- Para visualizar o resultado deste código é necessário fazer o procedimento abaixo:
1 - Vá até o arquivo "html_DOM.html"
2 - Localize a tag <script>
3 - Altere o documento para o que você deseja visualizar
4 - Clique com o botão direito e acesse a opção "Open with live server"
*/

//- Vai retornar uma coleção com todos os elementos armazenados em uma determinada classe
//- É possível realizar operações e comandos para cada classe definida e em todos os elementos que estiverem dentro dessa classe
//- É uma maneira mais especifica de manipular multiplos elementos, diferente da TagName que pega todos os elementos da Tag
// Sintaxe: document.getElementsByClassName("<nome-classe")

//Criando uma coleção com todos os elementos na classe "exemplos"
const colecao_exemplos = document.getElementsByClassName("exemplos")

//Convertendo a coleção para um array com todos os elementos da classe "exemplos" (Libera mais funcões)
const exemplos = [...document.getElementsByClassName("exemplos")]

//Alterando todos os elementos
exemplos.map((elementos)=>{
    document.write("Elementos: " + elementos.innerHTML + "<br>")
    elementos.style="font-size: 20px;"
})

//Criando um array com todos os elementos na classe "exemplo1" e alterando a cor da fonte
let exemplo1 = [...document.getElementsByClassName("exemplo1")]
for(elementos of exemplo1){
    elementos.style="color:green;"
}

//Criando um array com todos os elementos na classe "exemplo2" e alterando o texto
let exemplo2 = [...document.getElementsByClassName("exemplo2")]
for(elementos of exemplo2){
    elementos.innerHTML = "Exemplo 99"
}

//Criando um array com todos os elementos na classe "exemplo3" e realizando uma operação matemática
let exemplo3 = [...document.getElementsByClassName("exemplo3")]
for(elementos of exemplo3){
    elementos.innerHTML = (20+20)*2
}

//Criando um array com todos os elementos na classe "exemplo4"
let exemplo4 = [...document.getElementsByClassName("exemplo4")]
for(elementos of exemplo4){
    exemplo4[0].innerHTML = ("4")
    exemplo4[1].innerHTML = ("4.4")
    window.alert("Elementos da classe 'exemplo4':  " + elementos.innerHTML)
}

//Criando um array com todos os elementos na classe "exemplo5" e não alterando nada
let exemplo5 = [...document.getElementsByClassName("exemplo5")]



