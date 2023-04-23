const carro = document.getElementById("carro")
const btnEsquerda = document.getElementById("esquerda")
const btnDireita = document.getElementById("direita")
const parar = document.querySelector("#parar")

const init = ()=>{
    carro.style.position = 'relative'
    carro.style.left = '0px'
}

let animacao = null

const moverDir = (dir)=>{
    carro.style.left = parseInt(carro.style.left)+(10*dir)+"px"
}

const moverEsq = (esq)=>{
    carro.style.left = parseInt(carro.style.left)+(10*esq)+"px"
}

parar.addEventListener("click",()=>{
    clearInterval(animacao)
})

btnEsquerda.addEventListener("click",()=>{
    clearInterval(animacao)
    animacao=setInterval(moverDir,20,-1)
})

btnDireita.addEventListener("click",()=>{
    clearInterval(animacao)
    animacao=setInterval(moverEsq,20,1)
})

window.addEventListener('load',init())