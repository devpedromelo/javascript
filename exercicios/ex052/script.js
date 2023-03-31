class carro{ //classe pai
    constructor(nome,portas,gasolina){
        this.nome = nome
        this.portas = portas
        this.gasolina = gasolina
    }
}

class luxo extends carro{//classe filho
    //extends serve para definir que essa classe vai herdar a classe carro
    constructor(nome,portas,gasolina,tecnologico){
        super(nome,portas,gasolina)//super serve para que eu invoque algo da classe pai
        this.tecnologico=tecnologico
    }
}

let nomeDoCarro = document.querySelector('#nome')
let portasDoCarro = document.querySelector('#portas')
let gas = document.querySelector('#gasolina')
let tec = document.querySelector("#tec")
let tipoNormal = document.querySelector("#normal")
let tipoLuxo = document.querySelector("#luxo")
let btn = document.querySelector("#btn")
let res = document.querySelector(".res")

btn.addEventListener("click", ()=>{
    let verificacao = ''
    if(tipoNormal.checked){
        verificacao = 'Carro Normal'
        const car = new carro
        car.nome=nomeDoCarro.value
        car.portas = Number(portasDoCarro.value)
        car.gasolina = Number(gas.value)
        res.innerHTML = `Nome do carro: ${car.nome}<br>`
        res.innerHTML += `Número de portas: ${car.portas}<br>`
        res.innerHTML += `O máximo de litros que ele aguenta: ${car.gasolina}`
    }else{
        window.alert("tudo ok")
    }
})