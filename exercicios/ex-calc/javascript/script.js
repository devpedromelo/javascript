//---------------------SELECIONANDO OS ELEMENTOS-------------------------
const operacaoAnterior = document.querySelector('#previous-operation')
console.log(operacaoAnterior)
const operacaoAtual = document.querySelector('#current-operation')
console.log(operacaoAtual)
const botoes = document.querySelectorAll('#buttons-operation button')
console.log(botoes)

let soma = 0
let sub = 0

class calculator{
    constructor(operacaoAnterior, operacaoAtual){
        this.operacaoAnterior = operacaoAnterior //impressos na tela
        this.operacaoAtual = operacaoAtual
        //impressos na tela
        this.operacaoAtual = '' //digitando no momento
    }
}

//------------------------------EVENTOS----------------------------------

botoes.forEach((btn) => {
    btn.addEventListener("click", (el) => {
        const value = el.target.innerText

//SEPARANDO O QUE É NÚMERO E O QUE NÃO É
        if(Number(value) >= 0 || value === '.'){
            operacaoAtual.innerHTML += value
        }
    })
})

function somar(){
    let valorAtual = operacaoAtual.innerHTML
    soma = soma + Number(valorAtual)
    operacaoAnterior.innerHTML = soma
    console.log(soma)
    operacaoAtual.innerHTML = ''
}

function diminuir(){
    let valorAtual = operacaoAtual.innerHTML
    sub = sub - Number(valorAtual)
    operacaoAnterior.innerHTML = sub
    console.log(sub)
    operacaoAtual.innerHTML = ''
}

function equal(){
    let valorAnterior = operacaoAnterior.innerHTML
    operacaoAtual.innerHTML = valorAnterior
    valorAnterior = ''
}