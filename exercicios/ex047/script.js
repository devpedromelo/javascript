class carro{
    constructor(nome, tipo){
        this.nome = nome
        if(tipo==1){
            this.tipo = 'Esportivo'
            this.velmax = 300
        }else if(tipo==2){
            this.tipo = 'Utilitário'
            this.velmax = 100
        }else{
            this.tipo = 'Passeio'
            this.velmax = 160
        }
    }

    // getNome(){
    //     return this.nome
    // }

    // getTipo(){
    //     return this.tipo
    // }

    // getVelmax(){
    //     return this.velmax
    // }

    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVel(velmax){
        this.velmax = velmax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log('----------------------------')
    }
}

let c1 = new carro('Rapido',1)
let c2 = new carro('Luxo',2)
let c3 = new carro('Normal',3)

c1.setNome('Super Veloz')
c1.setTipo('Esportivo(fórmula 1)')
c1.setVel(360)

// console.log(c1.getInfo()[0])
c1.info()
// c2.info()
// c3.info()