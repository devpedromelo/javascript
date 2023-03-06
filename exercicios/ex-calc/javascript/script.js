//---------------------SELECIONANDO OS ELEMENTOS-------------------------
const previousOperationText = document.querySelector('#previous-operation')
console.log(previousOperationText)
const currentOperationText = document.querySelector('#current-operation')
console.log(currentOperationText)
const buttons = document.querySelectorAll('#buttons-operation button')
console.log(buttons)

//------------------------------EVENTOS----------------------------------

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText

        console.log(value)
    })
})