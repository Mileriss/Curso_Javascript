/*
- Os operadores lógicos são utilizados em comparações onde existe mais de uma condição a ser atendida
- É realizada uma comparação multipla onde ambas as condições precisam ser verificadas para retornar um resultado Booleano

&& -> AND / E
- Se uma condição E a outra estiverem de acordo

|| -> OR / OU
- Se uma condição OU a outra estiverem de acordo

! -> NOT / NÃO / DIFERENTE
- Se uma condição NÃO está de acordo ou é DIFERENTE
*/

var n1 = 10
var n2 = 20
var n3 = 30

//Operações AND / E
if (n1 < n2 && n2 < n3){
    console.log("As condições são verdadeiras!\nretorno: TRUE\n")
}
else if(n1 > n2 && n2 < n3){
    console.log("Uma das condições é falsa!\nretorno: FALSE\n")
}

//Operações OR / OU
if (n1 > n2 || n2 > n1){
    console.log("Uma das condições é verdadeira!\nretorno: TRUE\n")
}
else if (n1 < n2 || n2 > n3){
    console.log("Ambas as condições são falsas!\nretorno: FALSE\n")
}

//OPERAÇÕES NOT / NÃO / DIFERENTE
if (!(n1 > n2 )){
    console.log("A condição está sendo negada!\nretorno: TRUE\n")
}
else if(!(n1 < n2)){
    console.log("A condição está sendo negada!\nretorno: FALSE\n")
}

//Operações multiplas: AND e OR juntos
if ((n1 < n2 && n2 < n3) || (n1 < n2 && n2 != n3)){
    console.log("Uma das condições é verdadeira!\nretorno: TRUE\n")
}