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
let tecLux = document.querySelector("#lux")
let tec = document.querySelector("#tec")
let tipoNormal = document.querySelector("#normal")
let tipoLuxo = document.querySelector("#luxo")
let btn = document.querySelector("#btn")
let res = document.querySelector(".res")

btn.addEventListener("click", ()=>{
    if(tec.value != 'sim' && tec.value != 'não'){
        window.alert("Na aba tecnológico, responda somente com sim ou não.")
    }
    let verificacao = ''
    if(tipoNormal.checked){
        res.innerHTML = ''
        verificacao = 'Carro Normal'
        const car = new carro
        car.nome=nomeDoCarro.value
        car.portas = Number(portasDoCarro.value)
        car.gasolina = Number(gas.value)
        res.innerHTML += `<h2>${verificacao}</h2>`
        res.style.padding = '10px'
        res.innerHTML += `Nome do carro: ${car.nome}<br>`
        res.innerHTML += `Número de portas: ${car.portas}<br>`
        res.innerHTML += `O máximo de litros que ele aguenta: ${car.gasolina}`
    }else if(tipoLuxo.checked){
        res.innerHTML = ''
        verificacao = 'Carro de Luxo'
        const car = new luxo
        car.nome=nomeDoCarro.value
        car.portas = Number(portasDoCarro.value)
        car.gasolina = Number(gas.value)
        car.tecnologico = tec.value
        res.innerHTML += `<h2>${verificacao}</h2>`
        res.style.padding = '10px'
        res.innerHTML += `Nome do carro: ${car.nome}<br>`
        res.innerHTML += `Número de portas: ${car.portas}<br>`
        res.innerHTML += `O máximo de litros que ele aguenta: ${car.gasolina}<br>`
        res.innerHTML += `É tecnológico: ${car.tecnologico}`
    }
})