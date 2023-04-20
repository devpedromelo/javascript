const nome = Symbol('nome')
const num = Symbol('numero')
const uniforme = Symbol('uniforme')

const jogador={
    nome:"Messi",
}

jogador[num]=10
jogador[uniforme]='azul'

for(p in jogador){
    console.log(p)
}

console.log(jogador)
console.log(jogador.nome)
console.log(jogador[num])
console.log(jogador[uniforme])