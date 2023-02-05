/*
- Essa funcionalidade finaliza uma propagação de eventos por alguma função ou evento criado
- Quando uma div é criada e atribuida a um evento, todos os elementos que estiverem dentro do id, class ou tag indicada
vão receber o evento e a interação com qualquer um dos elementos realizará a propagação do evento
- stopPropagation vai permitir que você defina onde e quando o evento deve ser realizado.

sintaxe: stopPropagation()
*/

const bloco = document.getElementById("bloco-item")
const items = [...document.querySelectorAll("#item")]

//Vai exibir a frase "Clicou" quando a DIV for clicada
bloco.addEventListener("click", ()=>{
    console.log("Clicou")
})

//Os elementos da DIV não receberão nenhuma propagação de eventos
items.map((evento)=>{
    evento.addEventListener("click", (evt)=>{
        evt.stopPropagation()
    })
})
