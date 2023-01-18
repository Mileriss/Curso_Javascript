/*
- Funções são blocos de códigos que o programador cria e fica disponível para ser utilizado a qualquer momento no código
- As funções podem conter qualquer tipo de código e variável, apenas será um bloco reservado para determinada ação

PARAMETROS
- São valores que ficam estabelecidos dentro da criação de uma função
- É possível indicar um valor na criação da função e definir esse valor na hora que chamar a função
*/

//Parametro individual
function nome(nome) {
    console.log("O seu nome eh " + nome)
}
nome("Rafael")

//Parametro multiplo
function nomeCompleto(nome, sobrenome) {
    console.log("O nome completo eh " + nome + " " + sobrenome)
}
nomeCompleto("Rafael", "Mileris")

//Parametros com operações
function soma(n1, n2) {
    console.log("Resultado: " + (n1 + n2))
}
soma(10, 20)

//Parametros com valores pré-estabelecidos
function multiplicacao(n1 = 0, n2 = 0) {
    console.log("Resultado: " + (n1 * n2))
}
multiplicacao(2,10)

//Parametros com RETURN
function res_return(n1,n2){
    return n1+n2
}
console.log(res_return(10,20))


