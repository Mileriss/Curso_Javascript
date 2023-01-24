/*
- Funções são blocos de códigos que o programador cria e fica disponível para ser utilizado a qualquer momento no código
- As funções podem conter qualquer tipo de código e variável, apenas será um bloco reservado para determinada ação

- Funções Aninhadas permite que funções sejam declaradas e utilizadas dentro de outras funções
- Neste exemplo tem duas arrow functions, e uma está recebendo e operando valores da outra
*/

let somar=(...valores)=>{
    let soma=valor=>{
        let resultado = 0
        for(v of valor)
            resultado+=v
        return resultado
    }
    return soma(valores)
}

console.log(somar())