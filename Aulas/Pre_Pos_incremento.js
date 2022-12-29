/*
- A incrementação é muito utilizada em situações de loop e comparação, sempre atribuindo um valor a determinada condição.
*/

var num = 10

// PRE INCREMENTO
// - Vai realizar a incrementação antes de exibir o valor da variavel
++num
console.log("PRE INCREMENTO")
console.log(++num)

// PRE INCREMENTO NEGATIVO
// - Vai realizar o decremento antes de exibir o valor da variavel
--num
console.log("PRE DECREMENTO")
console.log(--num)

// PÓS INCREMENTO
// - Vai exibir o valor da variavel e depois incrementar
num++
console.log("PÓS INCREMENTO")
console.log(num++)

// PÓS INCREMENTO NEGATIVO
// - Vai exibir o valor da variavel e depois realizar o decremento
num--
console.log("PÓS DECREMENTO")
console.log(num--)