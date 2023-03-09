"use strict"

let soma = function(...valores){
    let tam = valores.length
    let soma = 0
    for(var c in valores){
        soma += valores[c]
    }
    return `O tamanho da array é: ${tam} e a soma é: ${soma}`
}

console.log(soma(5,10,15,20))