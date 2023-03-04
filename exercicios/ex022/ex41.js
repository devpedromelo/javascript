//-----------------UTILIZANDO O THIS-----------------------
console.log(this)
var teste = 5
console.log(this.teste)
var pessoa = {
 nome: 'Jack', //tem q separar por vírgula
 idade: 15,
 frase: function(){
    console.log(`O meu nome é ${this.nome}`)
 },
 aniversario: function(){
    this.idade += 1
 }
}

pessoa.frase()
console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)