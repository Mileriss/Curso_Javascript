/*
- É uma função que permite definir um tempo antes que um comando seja executado
- O tempo é medido através de milisegundos e pode ser util para mostrar o resultado de alguma operação

Sintaxe:
function <nome-função>(<parametros>){
    setTimeout(()=>{
        <bloco-código>
    }, <tempo-esperar>)
}

<nome-função>(<parametro>)
*/

//Exemplo simples
// - O nome será exibido de imediato, mas a idade vai aguardar 3 segundos para ser exibida
function mostrarIdade(idade) {
    setTimeout(()=>{
        console.log(idade)
    }, 3000)
}

let nome = "Rafael"
console.log(nome)
mostrarIdade(30)