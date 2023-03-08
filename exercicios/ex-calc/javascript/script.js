//---------------------SELECIONANDO OS ELEMENTOS-------------------------
const previousOperationText = document.querySelector('#previous-operation')
console.log(previousOperationText)
const currentOperationText = document.querySelector('#current-operation')
console.log(currentOperationText)
const buttons = document.querySelectorAll('#buttons-operation button')
console.log(buttons)

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText //impressos na tela
        this.currentOperationText = currentOperationText
        //impressos na tela
        this.currentOperation = '' //digitando no momento
    }
}

//------------------------------EVENTOS----------------------------------

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText

//SEPARANDO O QUE É NÚMERO E O QUE NÃO É
        if(Number(value) >= 0 || value === '.'){
            console.log(value)
        }else{
            console.log('op' + value)
        }
    })
})

function equal(){
    var currentValue = currentOperationText.innerHTML
    previousOperationText.innerHTML = currentValue
    currentOperationText.innerHTML = ''
}