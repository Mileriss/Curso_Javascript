/*
- Funções são blocos de códigos que o programador cria e fica disponível para ser utilizado a qualquer momento no código
- As funções podem conter qualquer tipo de código e variável, apenas será um bloco reservado para determinada ação

Sintaxe:

function <nome_função>(){
    <bloco de código>
}
<nome_função>()

*/

//- Logo abaixo vão conter exemplos de como utilizar funções utilizando operações matemáticas

//SOMAR
function somar(){ //Definição da função
    var n1 = 10
    var n2 = 20
    var resultado = (n1+n2)
    console.log("Soma: " + resultado)
}
somar() //Chamada da função

//SUBTRAIR
function subtrair(){
    var n1 = 10
    var n2 = 20
    var resultado = (n1-n2)
    console.log("Subtração: " + resultado)
}
subtrair()

//MULTIPLICAR
function multiplicar(){
    var n1 = 10
    var n2 = 20
    var resultado = (n1*n2)
    console.log("Multiplicar: " + resultado)
}
multiplicar()

//DIVIDIR
function dividir(){
    var n1 = 10
    var n2 = 20
    var resultado = (n1/n2)
    console.log("Dividir: " + resultado)
}
dividir()