/*
- While é um Loop que vai verificar determinada condição e enquanto ela não for atingida a variave recebe uma iteração de valor
- No caso do While é necessário realizar um escopo diferente do FOR para realizar o loop, onde vai existir uma variavel de controle e um comando de iteração.

Sintaxe:

<variavel> = <valor_variavel>
<while>(<condição>){
    <resultado_desejado>
    <iteração_variavel>
}
*/

//While Incremento
var num = 0
while(num < 10){
    console.log("Incremento While: " + num)
    num++
}

console.log("\n")

//While Decremento
var num = 10
while(num > 0){
    console.log("Decremento While: " + num)
    num--
}