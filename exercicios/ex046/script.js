class pessoa{
    constructor(nome, sobrenome, frase){
        this.nome = nome
        this.sobrenome = sobrenome
        this.frase = 'É um personagem da marvel no qual é o Homem-Aranha!'
    }
}

let p1 = new pessoa('Peter','Parker')
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.frase)