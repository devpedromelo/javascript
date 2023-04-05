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
let decimal = false

class calculator{
    constructor(operacaoAnterior, operacaoAtual){
        this.operacaoAnterior = operacaoAnterior //impressos na tela
        this.operacaoAtual = operacaoAtual //impressos na tela
    }
}

//------------------------------EVENTOS-----------------------------------

ce.addEventListener("click", ()=>{
    sinal = false
    decimal = false
    operacaoAtual.innerHTML=''
})

clear.addEventListener('click', ()=>{
    sinal = false
    decimal = false
    operacaoAnterior.innerHTML = ''
    operacaoAtual.innerHTML = ''
})

numbers.forEach((btn) => {
    btn.addEventListener("click", (el)=>{
        sinal = false
        let value = el.target.innerHTML
        if(value =="."){
            if(!decimal){
                decimal = true
                if(operacaoAtual.innerHTML == ''){
                    operacaoAtual.innerHTML += '0'+value
                }else{
                    operacaoAtual.innerHTML += value
                }
            }
        }else{
            operacaoAtual.innerHTML += value
        }
    })
})

botoes.forEach((btn)=>{
    btn.addEventListener('click', (el)=>{
        const op = el.target.innerText
        if(sinal==false){
            sinal = true
            if(op=="x"){
                operacaoAtual.innerHTML += "*"
            }else{
                operacaoAtual.innerHTML += op
            }
        }
    })
})

function equal(){
    sinal = false
    decimal = false
    res = eval(operacaoAtual.innerHTML)
    operacaoAnterior.innerHTML = operacaoAtual.innerHTML
    operacaoAtual.innerHTML = res
}