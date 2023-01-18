/*
- Funções são blocos de códigos que o programador cria e fica disponível para ser utilizado a qualquer momento no código
- As funções podem conter qualquer tipo de código e variável, apenas será um bloco reservado para determinada ação

PARAMETROS REST
- Permite definir quantos parametros forem necessários sem precisar definir todos na criação da função
- É preciso apenas definir o valor desejado ao chamar a função
- Este tipo de operação vai criar uma lista com todos os valores indicados no parametro e é possível percorrer os valores utilizando atributos de um array
*/

//Parametro REST com FOR 'padrão'
function somaValores1(...numeros) {
    let resultado = 0
    let tamanho = numeros.length //Vai armazenar a quantidade de valores que contem dentro do parametro
    for (n = 0; n < tamanho; n++) {
        resultado += numeros[n]
    }
    return resultado
}
console.log(somaValores1(2, 3, 5, 10))

//Parametro REST com FOR OF
function somaValores2(...numeros) {
    let resultado = 0
    for (n of numeros) {
        resultado += n
    }
    return resultado
}
console.log(somaValores2(2, 3, 5, 10))
