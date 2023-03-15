"use strict" //modo estrito

var nome = 'Neymar'

var jogador = {
    nome: 'Lionel',
    sobrenome: 'Messi',
    idade: 35,
    time: function(){
        console.log(`O jogador ${this.nome} ${this.sobrenome} joga no PSG.`)
    },
    temporada: function(){
        console.log(`Na temporada que vem, ele fará ${this.idade += 1} anos.`)
    }
}

console.log(nome)
jogador.time()
jogador.temporada()
jogador.temporada()