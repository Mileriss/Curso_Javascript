//Armazenando os items de determinados ID´s em variaveis
const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const botao = document.getElementById("btn_copiar")

//Criando um Array com os elementos que estão dentro da classe "items"
const items = [...document.getElementsByClassName("items")]

//Realizando um evento de clique em todos os elementos 
items.map((elementos)=>{
    elementos.addEventListener("click",(evento)=>{
        const item = evento.target //Indicando especificamente o "alvo" (item armazenado no array)
        item.classList.toggle("destaque") //Toggle -> Caso o elemento contenha a classe, ele retira, caso não contenha, ele adiciona
    })
})

//Realizando um evento ao clicar o botão "copiar"
botao.addEventListener("click", ()=>{
    const items_selecionados = [...document.querySelectorAll(".destaque")] //Seleciona todos os itens que contem a classe destaque
    items_selecionados.map((elementos)=>{
        caixa2.appendChild(elementos) //appendChild -> Vai pegar o elemento e passar para a div vazia (caixa2)
    })
})