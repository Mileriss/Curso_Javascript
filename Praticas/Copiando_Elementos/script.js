//Armazenando os items de determinados ID´s em variaveis
const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const botao_copiar = document.getElementById("btn_copiar")
const botao_devolver = document.getElementById("btn_devolver")

//Criando um Array com os elementos que estão dentro da classe "items"
const items = [...document.getElementsByClassName("items")]

//Realizando um evento de clique em todos os elementos 
items.map((elementos)=>{
    elementos.addEventListener("click",(evento)=>{
        const item = evento.target //Indicando especificamente o "alvo" (item armazenado no array)
        item.classList.toggle("destaque") //Toggle -> Caso o elemento contenha a classe, ele retira, caso não contenha, ele adiciona
    })
})

//Evento para transferir os elementos da caixa1 para a caixa2
botao_copiar.addEventListener("click", ()=>{
    const items_selecionados = [...document.querySelectorAll(".destaque")] //Seleciona todos os itens que contem a classe destaque
    items_selecionados.map((elementos)=>{
        caixa2.appendChild(elementos) //appendChild -> Vai pegar o elemento e passar para a div vazia (caixa2)
    })
})

//Evento para transferir os elementos da caixa2 para a caixa1
botao_devolver.addEventListener("click", ()=>{
    const items_selecionados = [...document.querySelectorAll(".destaque")]
    items_selecionados.map((elementos)=>{
        caixa1.appendChild(elementos)
    })
})