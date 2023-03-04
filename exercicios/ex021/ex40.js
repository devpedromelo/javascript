//-----------------CRIANDO OBJETOS-----------------------
var pessoa = {
 nome: 'Jack', //tem q separar por vírgula
 idade: 68,
 frase: function(idade = 68){
    if(idade < 50){
        console.log('Jack tem menos que 50 anos!')
    }else if(idade > 50){
        console.log('Jack tem mais que 50 anos!')
    }
 },
 soma: function(a, b){
    return a + b
 }
}


console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.frase()
console.log(pessoa.soma(5,5))