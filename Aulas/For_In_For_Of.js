/*
FOR IN - É uma variação do loop For que vai EXIBIR o indice dos elementos que estão dentro de um array/lista ou coleções

FOR OF - É uma variação do loopr For que vai RECEBER o indice dos elementos que estão dentro de um array/lista ou coleções
*/

//Array utilizado
lista = [10,20,30,40,50]

//FOR padrão
for(var num=0;num<10;num++){
    console.log("Valor Loop FOR padrão: " + num)
}

console.log("\n")

//FOR IN 
//- Vai exibir os indices de uma coleção, então deve ser indicado dentro do escopo de um array
for(l in lista){
    console.log("Valor do indice lista - FOR IN: " + lista[l])
}

console.log("\n")

//FOR OF
//- Vai receber os indices de uma coleção, então não precisa ser indicado dentro do escopo de um array
for(l of lista){
    console.log("Valor do indice lista - FOR OF: " + l)
}
