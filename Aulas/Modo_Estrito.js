/*
MODO ESTRITO:
- Existe um modo no JavaScript que se chama 'estrito' ou 'restrito' em portugês.
- Este modo é utilizado para deixar o código de forma limpa e organizada, não permitindo utilizar variáveis sem a devida declaração.
- Caso o programador declare uma variável sem definir, o navegador vai aceitar e exibir o conteudo, porem, não é o recomendado.
- O modo estrito serve justamente para evitar que esse tipo de coisa aconteça e ajuda a manter o código devidamente funcional.

UTILIZANDO O MODO ESTRITO:
- O modo estrito é utilizado indicando o comando "using estrict" no inicio da página
*/

//SEM MODO ESTRITO
//O navegador vai exibir todas as informações, mesmo a variável não estando declarada
nome = "Rafael"
console.log(nome)
console.log("Nome: " + nome)

"using estrict" //Chamada do modo estrito

//COM MODO ESTRITO
//O navegador não vai exibir as informações caso a variável não esteja devidamente declarada
let nome = "Rafael"
console.log(nome)
console.log("Nome: " + nome)
