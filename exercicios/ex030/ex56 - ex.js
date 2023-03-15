function pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.prof = 'detetive'

    this.profissao=function(){
        setTimeout(()=>{
            console.log(`${this.nome} tem ${this.idade} e trabalha como ${this.prof}`)
            this.idade += 1
        },1000)
    }
}

let p = new pessoa('Jack', 45)
for(var c = 0; c < 4; c++){
    p.profissao()
}

// let pessoa = {
//     nome: 'Jack',
//     idade: 15,
//     prof: 'detetive',
//     profissao:function() {
//         console.log(`${this.nome} tem ${this.idade} anos, e sua profissão é ${this.prof}.`)
//     }
// }

// pessoa.profissao()