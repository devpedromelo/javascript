const numObjetos = document.querySelector("#num-objetos")
const quantidadeDeObjetos = document.querySelector("#num")
const adicionar = document.querySelector("#add")
const remover = document.querySelector("#remover")
const palco = document.querySelector("#palco")

//------------------DEFININDO O TAMANHO DA JANELA QUE AS BOLINHAS VÃO OCUPAR---------------------------

let larguraPalco = palco.offsetWidth//pega a largura exata do elemento que relacionarmos
let alturaPalco = palco.offsetHeight//pega a largura exata do elemento que relacionarmos
let bolas=[]
let numBolas = 0
let validacao = ''

class Bola{
    constructor(arrayBolas, palco){
        this.tamanho = Math.floor(Math.random()*10)+10//tamanho aleatorio das bolas entre 10 e 20px
        this.r = Math.floor(Math.random()*255)//cor
        this.g = Math.floor(Math.random()*255)//cor
        this.b = Math.floor(Math.random()*255)//cor
        this.pX = Math.floor(Math.random()*(larguraPalco-this.tamanho))//posição aleatória do eixo x que a bolinha vai surgir
        this.pY = Math.floor(Math.random()*(alturaPalco-this.tamanho))//posição aleatória do eixo y que a bolinha vai surgir
        this.velX = Math.floor(Math.random()*2)+0.5
        this.velY = Math.floor(Math.random()*2)+0.5
        this.dirX = Math.floor(Math.random()*10)>5?1:-1
        this.dirY = Math.floor(Math.random()*10)>5?1:-1
        this.arrayBolas = arrayBolas
        this.palco = palco
        this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000000000000)
        // this.desenhar()
        // this.controle=setInterval(this.controlar, 10)
        this.desenho = document.getElementById(this.id)
    }
    minhaPos=()=>{

    }
    remover=()=>{

    }
    desenhar=()=>{
    
    }
    controlar=()=>{
        
    }
}

window.addEventListener("resize", (evt)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

adicionar.addEventListener("click", (evt)=>{
    let quantidade = quantidadeDeObjetos.value
    for(let i=0;i<quantidade;i++){
        //Criar novas bolinhas
        let bola = new Bola
        let criandoBolas = document.createElement("div")
        criandoBolas.setAttribute('class', 'bola')
        criandoBolas.style.height = `${bola.tamanho}px`
        criandoBolas.style.width = `${bola.tamanho}px`
        criandoBolas.style.left=`${bola.pX}px`
        criandoBolas.style.top=`${bola.pY}px`
        let alt = criandoBolas.style.top=`${bola.dirX}px`
        let larg = criandoBolas.style.left=`${bola.dirY}px`
        setInterval(()=>{
            bola = new Bola
            alt = criandoBolas.style.top=`${bola.dirX}px`
            larg = criandoBolas.style.left=`${bola.dirY}px`
        },1000)
        criandoBolas.style.background = `rgb(${bola.r},${bola.g},${bola.b})`
        palco.appendChild(criandoBolas)
    }
})

remover.addEventListener("click", (evt)=>{
    palco.removeChild(bolas)
})