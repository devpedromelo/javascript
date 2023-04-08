//---------------------SELECIONANDO OS ELEMENTOS-------------------------
const operacaoAnterior = document.querySelector('#previous-operation')
console.log(operacaoAnterior)
const operacaoAtual = document.querySelector('#current-operation')
console.log(operacaoAtual)
const botoes = [...document.querySelectorAll('.op')]
console.log(botoes)
const numbers = [...document.querySelectorAll('.number')]
console.log(numbers)
const copiar = document.querySelector('#copiar')
const clear = document.querySelector('#c')
let res = ''

let sinal = false //impedir de escrever vários operadores sem números
let decimal = false

let calculadora = document.querySelector("#calc")
let aba = document.querySelector("#aba")

class calculator{
    constructor(operacaoAnterior, operacaoAtual){
        this.operacaoAnterior = operacaoAnterior //impressos na tela
        this.operacaoAtual = operacaoAtual //impressos na tela
    }
}

//------------------------------EVENTOS-----------------------------------

copiar.addEventListener("click", ()=>{
    navigator.clipboard.writeText(operacaoAtual.innerHTML) //copiar
    //read= área de ler(colar)



    //====================================
    // teste.select()
    // teste.setSelectionRange(0,9999999)//mobile
    // navigator.clipboard.writeText(teste.value) 
    
    //em inputs é interessante colocar um select e o setSelectionRange() antes de copiar para não ter pro blemas ao copiar em dispositivos mobile
    //====================================
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
        if(res == 'Infinity'){
            res = 'Impossível calcular'
        }
    operacaoAnterior.innerHTML = operacaoAtual.innerHTML
    operacaoAtual.innerHTML = res
}

aba.addEventListener("click", ()=>{
    if(calculadora.style.left == '0px'){
        calculadora.style.left = '-400px'
    }else{
        calculadora.style.left = '0px'
    }
})