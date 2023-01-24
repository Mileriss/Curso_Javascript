/*
- Funções são blocos de códigos que o programador cria e fica disponível para ser utilizado a qualquer momento no código
- As funções podem conter qualquer tipo de código e variável, apenas será um bloco reservado para determinada ação

- Funções geradoras é utilizada para ter controle sobre o conteudo que a função deve exibir
- É necessário gerar um iterador para armazenar os elementos que forem definidos dentro dela
- A partir desses elementos é possível definir o que será exibido ou não no programa e qual a sequencia de exibição

* -> Define a função como 'geradora'
yield -> Comando para armazenar o valor dentro da função geradora
NEXT() -> Indica que deve realizar o proximo passo dentro da função
VALUE -> Indica que o retorno deve ser o valor armazenado

*/

//Função geradora simples
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let resultado=cores()
console.log(resultado.next().value)
console.log(resultado.next().value)

//Função geradora com parametros
function* perguntas(){
    let nome=yield "Qual eh o seu nome"
    let esporte=yield "Qual seu esporte favorito"
    return "Seu nome eh " + nome + " E seu esporte favorito eh " + esporte
}

let iterador = perguntas()
console.log(iterador.next().value)
console.log(iterador.next("Rafael").value)
console.log(iterador.next("Futebol").value)