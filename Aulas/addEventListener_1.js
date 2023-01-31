/*
- Serve como um inerpretador de funções para cada tipo de situação
- O comando addEventListener disponibiliza uma variedade muito alta de funções e interações com a página
- É possível criar comandos e utiliza-los com uma interação de "clique" dentro de um elemento
- Tambem possibilita interações com os metodos DOM, tornando o uso muito extenso e produtivo

Sintaxe: addEventListener(<função_metodo>, <função>)
*/

//Função básica para interação com o exemplo 1
function mensagem(){
    alert("Clicou no elemento: " + document.getElementById("ex1").innerText)
}

//addEventListener simples
function mensagem2(){
    alert("Clicou no elemento: " + document.getElementById("ex2").innerText)

}
let exemplo_2 = document.getElementById("ex2")
exemplo_2.addEventListener("click", mensagem2)

//addEventListener com Arrow Function
let exemplo_3 = document.getElementById("ex3")
exemplo_3.addEventListener("click", ()=>{
    alert("Clicou no elemento: " + document.getElementById("ex3").innerText)
})

//addEventListener com metodos DOM
let exemplo_4 = document.getElementById("ex4")
exemplo_4.addEventListener("click", ()=>{
    exemplo_4.style.backgroundColor = "Purple"
    exemplo_4.style.color = "White"
    exemplo_4.style.fontWeight = "bold"
})

//addEventListener com metodo MAP
const exemplo_5 = document.getElementById("ex5")
exemplo_5.addEventListener("click", ()=>{
    const lista_classe = [...document.getElementsByClassName("exemplos")]
    lista_classe.map((elementos, indices)=>{
        document.write("Posição: " + indices + " Elemento: " + elementos.innerText + "<br>")
    })
})