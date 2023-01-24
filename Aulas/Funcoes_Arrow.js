/*
- Funções são blocos de códigos que o programador cria e fica disponível para ser utilizado a qualquer momento no código
- As funções podem conter qualquer tipo de código e variável, apenas será um bloco reservado para determinada ação

ARROW
- São funções criadas de uma forma mais simples e com menos quantidade de linhas de código
- É um padrão utilizado dentro do estilo de funções anonimas

Sintaxe:
variavel = <nome-funcao>(<parametros>) => {return <operação>}
*/

//INTEIRO
let numero=(n1)=>{return "O N1 vale: " + n1}
console.log(numero(10))

//STRING
let nome=(nome)=>{return "O seu nome eh: " + nome}
console.log(nome("Rafael"))

//SOMA
let soma=(n1,n2)=>{return "A soma de n1 + n2 eh: " + (n1+n2)}
console.log(soma(10,20))

