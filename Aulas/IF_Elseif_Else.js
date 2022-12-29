/*
- IF, ELSE IF e ELSE são operações para verificar uma condição e retornar um bloco de comando com determinadas ações

IF - SE
ELSE IF - SENÃO
ELSE - ENTÃO

IF -> Sempre será o primeiro estado de uma operação de comparação
ELSE IF -> Será o estado seguinte ao IF, pode ser utilizado quantas vezes forem necessárias
ELSE -> É o estado final, onde vai exibior o resultado caso nenhuma condição anterior seja satisfeita

Sintaxe:

if (<condição>){
    <resultado_condição>
}
else if(<condição>){
    <resultado_condição>
}
else{
    <resultado_final>
}
*/

//Operações básicas
var num1 = 10
var num2 = 20

//Condição IF
if (num1 < num2){
    console.log("Condição IF Verdadeira")
}

//Condição IF, ELSE IF
if (num1 > num2){
    console.log("Condição IF Verdadeira")
}
else if (num1 < num2){
    console.log("Condição Else IF Verdadeira")
}


//Condição IF, ELSE IF, ELSE
if (num1 > num2){
    console.log("IF - Condição IF Verdadeira")
}
else if (num1 >= num2){
    console.log("ELSE IF - Condição ELSE IF Verdadeira")
}
else{
    console.log("ELSE - Nenhuma condição foi atingida")
}


// Operações complexas
var num1 = 10
var num2 = 20
var num3 = 30
var num4 = 40

//Condição IF
if ((num1 < num2) && (num3 < num4)){
    console.log("Condição IF Verdadeira")
}

//Condição IF, ELSE IF
if (num1 > num2){
    console.log("Condição IF Verdadeira")
}
else if ((num1 < num2) || num3 > num4){
    console.log("Condição Else IF Verdadeira")
}

//Condição IF, ELSE IF, ELSE
if ((num1 > num2) && (num3 > num4) || (num1 > num3) && (num4 < num2)){
    console.log("IF - Condição IF Verdadeira")
}
else if (num1 >= num2){
    console.log("ELSE IF - Condição ELSE IF Verdadeira")
}
else{
    console.log("ELSE - Nenhuma condição foi atingida")
}