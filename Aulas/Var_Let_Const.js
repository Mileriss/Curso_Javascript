/*
Em Javascript há três formas de declarar uma variável: LET, VAR e CONST

VAR - Vai ser uma variável 'global' que poderá ser acessada a qualquer momento no código, estando dentro ou não de um escopo
LET - É uma variável 'local' que será definida e utilizada apenas dentro do escopo onde ela foi criada
CONST - É uma váriavel que poderá ter o valor utilizado em qualquer ponto do código, porem, não poderá ter o seu valor alterado.
- Será uma valor de valor CONSTANTE, uma vez definido não podera será alterado
*/

//VAR - Utiliza a qualquer momento
var nome_var = "Nome_var"
console.log(nome_var)

//LET - Utiliza apenas dentro do IF onde foi declarada
if(true){
    let nome_let = "Nome_let"
    console.log(nome_let)
}

//CONST - Utiliza em qualquer momento e terá apenas esse valor
const nome_const = "Nome_const"
console.log(nome_const)

//Não será exibida porque está fora do escopo IF
console.log(nome_let)