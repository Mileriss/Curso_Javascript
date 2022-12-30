/*
BREAK - É um estado onde pode ser utilizado para interromper um loop ou bloco de códigos

CONTINUE - É um estado utilizado para verificar determinada condição, caso a condição não seja atendida, ele pula
e continua o loop até a condição ser atendida novamente
*/

//BREAK
/*
- Neste caso o loop While vai verificar se a variavel tem o valor 100, caso contrário ele vai rodar e iterar a variável até chegar a condição
- Com o comando break, o loop vai parar de rodar quando atingir a condição indicada no escopo que contem o break
- Se a variavel chegar até o numero 55 o break vai interromper o loop e não rodar nada após a interrupção.
*/
var num = 0
while(num < 100){
    console.log("Valor: " + num)
    if (num == 55){
        break;
        //Após o break a linha de código fica transparente, indicando que não valerá no código
        console.log("Valor atual da variavel: " + num) 
    }
    num++
}

console.log("\n")

//CONTINUE
/*
- Neste caso a gente cria um loop for normal onde vai comparar uma variavel com valor 0 até o numero 100
- Cria uma condição para verificar os numeros pares encontrados dentro do loop e utiliza o Continue
- O continue vai verificar se o numero atual do loop é par, caso seja, ele vai continuar o loop até localizar outro par
- Os pares serão armazenados em uma nova variavel e no fim retornará o numero de pares encontrados no loop
*/
var num = 0
var armz_num = 0
for(var n = num;n<100;n++){
    if(n%2!=0){
        continue;
    }
    armz_num++
}

console.log("Numero de pares: " + armz_num)
