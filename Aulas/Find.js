const p_array = document.getElementById("array")
const txt_pesquisar = document.getElementById("txt-pesquisar")
const btnPesquisar = document.getElementById("btn-pesquisar")
const resultado = document.getElementById("resultado")

const el_array = [10, 5, 8, 2, 9, 15, 20]
p_array.innerHTML = "["+el_array+"]"

btnPesquisar.addEventListener("click", (evento) => {
    resultado.innerHTML = "Valor não encontrado"
    const ret = el_array.find((elemento, indice) => {
        if (elemento == txt_pesquisar.value) {
            resultado.innerHTML = "Valor encontrado: " + elemento + " na posição: " + indice
            return elemento
        }
    })
    console.log(ret)
})
