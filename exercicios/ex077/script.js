const carro = document.getElementById("carro")
const play = document.querySelector("#play")
const parar = document.querySelector("#parar")

let tamWindow = null

const init = ()=>{
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
    tamWindow = window.innerWidth - parseInt(carro.style.width)
}

let animacao = null

const mover = (esq)=>{
    if(esq > 0){
        if(parseInt(carro.style.left)<=tamWindow){
            carro.style.left = parseInt(carro.style.left)+(10*esq)+"px"
            animacao = setTimeout(mover,20,esq)
        }else{
            animacao = setTimeout(mover,20,-1)
        }
    }else if(esq < 0){
        if(parseInt(carro.style.left)>=0){
            carro.style.left = parseInt(carro.style.left)+(10*esq)+"px"
            animacao = setTimeout(mover,20,esq)
        }else{
            animacao = setTimeout(mover,20,1)
        }
    }
}

parar.addEventListener("click",()=>{
    clearTimeout(animacao)
})

play.addEventListener("click",()=>{
    clearTimeout(animacao)
    mover(1)
})

window.addEventListener('load',init())
window.addEventListener('resize',()=>{
    tamWindow = window.innerWidth - parseInt(carro.style.width)
})