const carro = document.getElementById("carro")
const btnEsquerda = document.getElementById("esquerda")
const btnDireita = document.getElementById("direita")
const parar = document.querySelector("#parar")

let tamWindow = null

const init = ()=>{
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
    tamWindow = window.innerWidth - parseInt(carro.style.width)
}

let animacao = null

const moverEsq = (esq)=>{
    if(esq < 0){
        if(parseInt(carro.style.left)>=0){
            carro.style.left = parseInt(carro.style.left)+(10*esq)+"px"
            animacao = setTimeout(moverEsq,20,esq)
        }else{
            clearTimeout(animacao)
        }
    }else if(esq > 0){
        if(parseInt(carro.style.left)<=tamWindow){
            carro.style.left = parseInt(carro.style.left)+(10*esq)+"px"
            animacao = setTimeout(moverEsq,20,esq)
        }else{
            clearTimeout(animacao)
        }
    }
}

parar.addEventListener("click",()=>{
    clearTimeout(animacao)
})

btnEsquerda.addEventListener("click",()=>{
    clearTimeout(animacao)
    moverEsq(-1)
})

btnDireita.addEventListener("click",()=>{
    clearTimeout(animacao)
    moverEsq(1)
})

window.addEventListener('load',init())
window.addEventListener('resize',()=>{
    tamWindow = window.innerWidth - parseInt(carro.style.width)
})