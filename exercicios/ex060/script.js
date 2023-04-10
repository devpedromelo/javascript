const numero = document.querySelector("#numero")
const btn = document.querySelector("#btn")

numero.innerHTML = 'Esperando...'

let promessa = ()=>{
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
    return promise
}

btn.addEventListener("click",(evt)=>{   
    numero.innerHTML = 'Processando...' 
    promessa()
        .then((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.remove('erro')
            numero.classList.add("ok")
        })
        .catch((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.remove('ok')
            numero.classList.add("erro")
        })
})