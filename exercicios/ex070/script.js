class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores = [new Jogador('Messi'),new Jogador('Messi'),new Jogador('CR7'),new Jogador('Haaland'),new Jogador('Mbappe'),new Jogador('Salah'),new Jogador('Lewandowski'),new Jogador('Benzema')]

let s=[]

let sjogadores=jogadores.filter((j)=>{
    return j.nome=="Messi"
})

s=sjogadores.map((j)=>{
    return j.id
})

console.log(sjogadores)
console.log(s)