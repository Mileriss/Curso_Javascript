/*
- Switch Case é um comando que realiza um Loop para verificar um condição atráves do valor de um elemento
- Atráves deste loop o programa percorre diversas condições até encontrar a que se encaixa e finaliza o programa exibindo o resultado.
*/

//Switch Case individual
var posicao = 4

switch(posicao){
    case 1:
        console.log("Posição numero 1")
        break;
    case 2:
        console.log("Posição numero 2")
        break;
    case 3:
        console.log("Posição numero 3")
        break;
    default:
        console.log("Nenhuma posição atingida!")
        break;
}

//Switch Case com varios retornos

var posicao2 = 4

switch(posicao){
    case 1:
        console.log("Posição numero 1")
        break;
    case 2:
        console.log("Posição numero 2")
        break;
    case 3:
        console.log("Posição numero 3")
        break;
    case 4: case 5: case 6:
        console.log("Posições fora do top 3")
        break;
    default:
        console.log("Nenhuma posição atingida!")
        break;
}

// Switch Case com operações

var num1 = 10
var num2 = 20
var resultado = 0
var escolha = 3

switch(escolha){
    case 1:
        resultado = (num1 + num2)
        console.log("O resultado é: " + resultado)
        break;
    case 2:
        resultado = (num1 - num2)
        console.log("O resultado é: " + resultado)
        break;
    case 3:
        resultado = (num1 * num2)
        console.log("O resultado é: " + resultado)
        break;
    case 4:
        resultado = (num1 / num2)
        console.log("O resultado é: " + resultado)
        break;
    default:
        console.log("Nenhuma operação foi realizada!")
        break;
}