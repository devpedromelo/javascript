const numero = document.querySelector("#numero")

let promise = new Promise((accept, reject)=>{
    let res = true
    let tempo = 3000
    setTimeout(()=>{
        if(res==true){
            accept("Deu certo")
        }else{
            reject("Deu um erro")
        }
    },tempo)
})

promise.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove('erro')
    numero.classList.add("ok")
})
promise.catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove('ok')
    numero.classList.add("erro")
})


numero.innerHTML = 'Processando...'