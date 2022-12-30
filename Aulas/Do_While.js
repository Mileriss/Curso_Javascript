/*
- Essa operação é uma variação do loop While onde tem o mesmo intuito, porem, uma estrutura diferente
- Enquanto no While a gente indica uma condição para realizar determinado comando, no Do While o comando é indicado antes da condição
- Por conta do comando estar antes da condição, o Do While exibe a resposta do comando uma vex antes de atingir a determinada condição.

Sintaxe:
do{
    <comandos>
    <iteração>
}while(<condição>)

*/

//While padrão
var num = 0
while(num < 5){
    console.log("Valor While: " + num)
    num++
}

console.log("\n")

//Do While padrão
var num = 10
do{
    console.log("Valor da variavel: " + num)
    num--
}while(num > 0)
console.log("Loop finalizado!")