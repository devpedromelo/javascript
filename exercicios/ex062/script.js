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
        this.dirX = Math.floor(Math.random()*10)>5?+1:-1
        this.dirY = Math.floor(Math.random()*10)>5?+1:-1
        this.arrayBolas = arrayBolas
        this.palco = palco
        this.id = Math.floor(Math.random()*1000000000000000000)
        this.desenhar()
        this.controle=setInterval(this.controlar, 10)
        this.desenho = document.getElementById(this.id)
        numBolas++
        numObjetos.innerHTML = numBolas 
    }
    desenhar=()=>{
        const criandoBolas = document.createElement("div")
        criandoBolas.setAttribute('id',this.id)
        criandoBolas.setAttribute('class', 'bola')
        criandoBolas.style.height = `${this.tamanho}px`
        criandoBolas.style.width = `${this.tamanho}px`
        criandoBolas.style.left=`${this.pX}px`
        criandoBolas.style.top=`${this.pY}px`
        criandoBolas.style.background = `rgb(${this.r},${this.g},${this.b})`
        this.palco.appendChild(criandoBolas)
    }
    
    controlar=()=>{
        this.colisaoBordas()
        this.pX+=this.dirX*this.velX
        this.pY+=this.dirY*this.velY
        this.desenho.style.height = `${this.tamanho}px`
        this.desenho.style.width = `${this.tamanho}px`
        this.desenho.style.left=`${this.pX}px`
        this.desenho.style.top=`${this.pY}px`
        this.desenho.style.background = `rgb(${this.r},${this.g},${this.b})`
        this.palco.appendChild(this.desenho)
        if((this.pX > larguraPalco) || (this.pY > alturaPalco)){
            this.remover()
        }
    }

    colisaoBordas = ()=>{
        if(this.pX+this.tamanho >= larguraPalco){
            this.dirX = -1
        }else if(this.pX <= 0){
            this.dirX = 1
        }

        if(this.pY+this.tamanho >= alturaPalco){
            this.dirY = -1
        }else if(this.pY <= 0){
            this.dirY = 1
        }
    }

    remover=()=>{
        clearInterval(this.controle)
        this.desenho.remove()
        numBolas--
        numObjetos.innerHTML = numBolas 
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
        bolas.push(new Bola(bolas, palco))
    }
})

remover.addEventListener("click", (evt)=>{
    bolas.map((b)=>{
        b.remover()
    })
})