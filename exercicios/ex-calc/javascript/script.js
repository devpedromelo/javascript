//---------------------SELECIONANDO OS ELEMENTOS-------------------------
const previousOperationText = document.querySelector('#previous-operation')
console.log(previousOperationText)
const currentOperationText = document.querySelector('#current-operation')
console.log(currentOperationText)
const buttons = document.querySelectorAll('#buttons-operation button')
console.log(buttons)

var currentValue = currentOperationText.innerHTML

//------------------------------EVENTOS----------------------------------

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText
        let arrayNum = [value]
        console.log(arrayNum)
        //sumindo sinal de igual
        if(value == '='){
            currentOperationText.innerHTML = ''
        }else if(value == 'CE'){//resetando a operação mais recente
            currentOperationText.innerHTML = ''
            currentValue.innerHTML = ''
        }else if(value == 'C'){ //clear
            previousOperationText.innerHTML = ''
            currentOperationText.innerHTML = ''
            currentValue.innerHTML = ''
        }else{
            currentOperationText.innerHTML += value
        }
        
        //del
        if(value == 'DEL'){
            arrayNum.pop()
            currentOperationText.innerHTML = arrayNum
        }
    })
})

function equal(){
    var currentValue = currentOperationText.innerHTML
    previousOperationText.innerHTML = currentValue
    currentOperationText.innerHTML = ''
}