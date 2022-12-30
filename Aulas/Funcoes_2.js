/*
- Funções são blocos de códigos que o programador cria e fica disponível para ser utilizado a qualquer momento no código
- As funções podem conter qualquer tipo de código e variável, apenas será um bloco reservado para determinada ação

RETURN - Vai retornar o que for especificado, é uma maneira de retornar uma ação dentro da função sem precisar de um comando especifico.
- O Return permite realizar essa ação para quando a função for chamada, sem necessariamente precisar de um comando 'console.log' por exemplo.
- Caso o programador apenas chame a função contendo o return, o conteudo não será exibido, ele apenas indica o que a função deve fazer.
- Qualquer código escrito após o return não será interpretado pelo programa
*/

//Indicando o uso do return
function nome(){
    var nome = "Rafael "
    var sobrenome = "Mileris "
    return nome+sobrenome
}

//Não vai exibir nada, o return apenas indica o que deve ser feito
nome()

//Vai exibir o elemento da função dentro de um comando de impressão
console.log(nome())

//Vai armazenar a função dentro de uma variavel
var funcao = nome()
console.log(funcao)

