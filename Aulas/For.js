/*
- Loop For é utilizado como uma estrutura de repetição para rodar um bloco de comandos diversas vezes até alcançar o seu propósito.
- Este Loop é considerado como 'definido' e utilizado quando o programador tem uma noção de quantas vezes será necessário rodar determinado bloco.
- A cada Loop realizado o For realiza uma iteração de uma determinada condição até alcançar um determinado ponto.

Sintaxe: (<variavel>;<condição>;<controle/iteração>)
*/

//Operação normal - Incremento
/*
1 - Variavel NUM recebe 0
2 - Condição: Enquanto NUM for menor que 10
3 - Imprima o console.log e realize uma iteração
4 - Finaliza quando NUM não for mais menor que 10
*/

for(var num=0;num < 10;num++){
    console.log("Incremento atual: " + num)
}

console.log("\n")

//Operação normal - Decremento
/*
1 - Variavel NUM recebe 10
2 - Condição: Enquanto NUM for maior que 0
3 - Imprima o console.log e realize uma iteração
4 - Finaliza quando NUM não for mais maior que 0
*/
for(var num=10;num > 0;num--){
    console.log("Decremento atual: " + num)
}

console.log("\n")

//Operação com multiplas condições
for(var num=0;num < 10;num++){
    console.log("Numero atual: " + num)
    if (num == 6){
        break;
    }
}