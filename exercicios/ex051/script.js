class carro{ //classe pai
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velMax = 0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class luxo extends carro{//classe filho
    //extends serve para definir que essa classe vai herdar a classe carro
    constructor(nome,portas,gasolina,tecnologico){
        super(nome,portas)//super serve para que eu invoque algo da classe pai
        this.gasolina=gasolina
        this.tecnologico=tecnologico
    }
    gastar=function(){
        if(this.gasolina>0){
            this.gasolina--
        }
    }
}

const carro1 = new carro('Normal',4)
const carro2 = new luxo('lamborghini', 2, 10, true)
carro1.ligar()
carro1.setCor('Preto')

console.log(`Nome: ${carro1.nome}`)
console.log(`Portas: ${carro1.portas}`)
console.log(`Ligado: ${carro1.ligar?'Sim':'Não'}`)
console.log(`Velocidade: ${carro1.velMax}`)
console.log(`Cor: ${carro1.cor}`)
console.log('---------------------------------')

carro2.setCor('Vermelho')

carro2.gastar()
carro2.gastar()
console.log(`Nome: ${carro2.nome}`)
console.log(`Portas: ${carro2.portas}`)
console.log(`Ligado: ${carro2.ligado?'Sim':'Não'}`)
console.log(`Velocidade: ${carro2.velMax}`)
console.log(`Cor: ${carro2.cor}`)
console.log(`Tecnologico: ${carro2.tecnologico?'Sim':'Não'}`)
console.log(`Gasolina: ${carro2.gasolina}L`)

console.log('---------------------------------')