/*
- A função Filter permite que você crie um filtro para receber os dados a partir de uma determinada condição
- Por exemplo, se existir um Array com vários numeros mas você deseja apenas os numeros que são maior ou igual a 18
- Para utilizar o método Filter é necessário indica-lo em uma função com a condição que você definir
- O filter recebe 3 parametros: Valor, Indice, Array

Sintaxe: <variavel>.filter(<nome-função>)
*/

const lista_idades = [10,12,15,18,20,23,25,30]
console.log("Lista das idades: " + lista_idades)

const maior_idade = lista_idades.filter((valor)=>{
    if(valor >= 18){
        return valor
    }
})
console.log("Idades acima de 18 anos: " + maior_idade)

const menor_idade = lista_idades.filter((valor)=>{
    if(valor < 18){
        return valor
    }
})
console.log("Idades abaixo de 18 anos: " + menor_idade)