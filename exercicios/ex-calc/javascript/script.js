//---------------------SELECIONANDO OS ELEMENTOS-------------------------
const operacaoAnterior = document.querySelector('#previous-operation')
console.log(operacaoAnterior)
const operacaoAtual = document.querySelector('#current-operation')
console.log(operacaoAtual)
const botoes = [...document.querySelectorAll('.op')]
console.log(botoes)
const numbers = [...document.querySelectorAll('.number')]
console.log(numbers)
const ce = document.querySelector('#ce')
const clear = document.querySelector('#c')
let res = ''

let sinal = false //impedir de escrever vários operadores sem números

class calculator{
    constructor(operacaoAnterior, operacaoAtual){
        this.operacaoAnterior = operacaoAnterior //impressos na tela
        this.operacaoAtual = operacaoAtual //impressos na tela
    }
}

//------------------------------EVENTOS-----------------------------------

ce.addEventListener("click", ()=>{
    sinal = false
    operacaoAtual.innerHTML=''
})

clear.addEventListener('click', ()=>{
    sinal = false
    operacaoAnterior.innerHTML = ''
    operacaoAtual.innerHTML = ''
})

numbers.forEach((btn) => {
    btn.addEventListener("click", (el)=>{
        sinal = false
        const value = el.target.innerText
        operacaoAtual.innerHTML += value
        res += Number(value)
    })
})

botoes.forEach((btn)=>{
    btn.addEventListener('click', (el)=>{
        const op = el.target.innerText
        if(sinal==false){
            sinal = true
                if(op=='+'){
                    let soma = Number(res)
                    res = ''
                    console.log(soma)
                    operacaoAtual.innerHTML += '+'
                }
                if(op=='x'){
                    operacaoAtual.innerHTML += '*'
                }
                if(op=='-'){
                    operacaoAtual.innerHTML += '-'
                }
                if(op=='/'){
                    operacaoAtual.innerHTML += '/'
                }
        }
    })
})

function equal(){
    operacaoAnterior.innerHTML = operacaoAtual.innerHTML
    operacaoAtual.innerHTML = ''
}