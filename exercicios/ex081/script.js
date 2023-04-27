//----------------VALIDAÇÃO EM JS-----------------------

const nome = document.querySelector("#nome")
const nota = document.querySelector("#nota")
const msg = document.querySelector("#msg")
const btn = document.querySelector("#validar")

btn.addEventListener("click", (evt)=>{
    let estadoValidacao = nota.validity
    if(estadoValidacao.valueMissing){//valueMissing = valor vazio
        nota.setCustomValidity("Este campo é obrigatório!!!!!")//setCustomValidity = cria uma mensagem personalizada
    }else if(estadoValidacao.rangeOverflow){//rangeOverflow = valor muito alto
        nota.setCustomValidity("O valor digitado e maior que o requerido!!!!!!!!!!!!!")
    }else if(estadoValidacao.rangeUnderflow){//rangeUnderflow = valor muito baixo
        nota.setCustomValidity("O valor digitado e beeeeem menor que o requerido!!!!!!!!!!!!!")
    }else{
        msg.innerHTML = 'Tudo OK'
    }
    nota.reportValidity()//reportValidity = reporta a validação na mensagem do html
    // msg.innerHTML = nota.validationMessage //reporta a validação no parágrafo definido
    evt.preventDefault()//faz com que não execute o submit(nesse caso quando tudo esiver preenchido corretamente)
})