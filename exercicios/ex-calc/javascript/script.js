//---------------------SELECIONANDO OS ELEMENTOS-------------------------
const operacaoAnterior = document.querySelector('#previous-operation')
console.log(operacaoAnterior)
const operacaoAtual = document.querySelector('#current-operation')
console.log(operacaoAtual)
const botoes = document.querySelectorAll('#buttons-operation button')
console.log(botoes)
const numbers = document.querySelectorAll('.number')

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
    let valorAnterior = operacaoAnterior.innerHTML
    valorAnterior = valorAtual
    valorAnterior = ''
    // let soma = Number(operacaoAnterior)
}

function equal(){
    let valorAtual = operacaoAtual.innerHTML
    operacaoAnterior.innerHTML = valorAtual
    valorAtual = ""
}