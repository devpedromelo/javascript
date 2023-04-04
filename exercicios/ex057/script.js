//Classes abstratas servem justamente para que uma classe sirva SOMENTE como base para outras classes, e não como uma base para criar objetos

class CarroPadrao{ //classe abstrata
    constructor(){
        if(this.constructor === CarroPadrao){
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if(this.portas === undefined){
            throw new TypeError('É obrigatório implementar o metodo portas')
        }
        this.rodas = 4
        this.portas = 4
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,potTurbo){
        super()
        this.turbo = new Turbo(potTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome = 'Normal'
        }else if(tipo==2){
            this.velMax=160
            this.nome = 'Esportivo'
        }else if(tipo==3){
            this.velMax=200
            this.nome = 'Super Esportivo'
        }
        this.velMax+=this.turbo.potencia
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log('-------------------------------------------')
    }
    portas(){}
}

class CarroEspecial extends Carro{
    constructor(potTurbo){
        super(4,potTurbo)
        this.nome = 'Carro Especial'
        this.velMax = 300
        this.velMax+=this.turbo.potencia
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Máxima: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.potencia}`)
        console.log('-------------------------------------------')
    }
}

class Turbo{
    constructor(turb){
        if(turb==0){
            this.potencia = 0
        }else if(turb==1){
            this.potencia = 50
        }else if(turb==2){
            this.potencia = 75
        }else if(turb= 3){
            this.potencia=100
        }
    }
}

const carro1 = new Carro(1,0)
const carro2 = new Carro(2,3)
const carro3 = new CarroEspecial(3)
carro1.info()
carro2.info()
carro3.info()