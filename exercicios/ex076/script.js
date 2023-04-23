const carro = document.getElementById("carro")
const btnEsquerda = document.getElementById("esquerda")
const btnDireita = document.getElementById("direita")

const init = ()=>{
    carro.style.position = 'relative'
    carro.style.left = '0px'
}

btnEsquerda.addEventListener("click",()=>{
    let pos = parseInt(carro.style.left)
    if(pos==0){
        pos=0
        carro.style.left = `${pos}px`
    }else{
        pos-=10
        carro.style.left = `${pos}px`
    }
    console.log(pos)
})

btnDireita.addEventListener("click",()=>{
    let pos = parseInt(carro.style.left)
    if(pos==960){
        pos=960
        carro.style.left = `${pos}px`
    }else{
        pos+=10
        carro.style.left = `${pos}px`
    }
    console.log(pos)
})

window.addEventListener('load',init())