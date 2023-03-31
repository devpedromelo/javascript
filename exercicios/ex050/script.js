let txtnome = document.querySelector('#nome')
let txtidade = document.querySelector('#idade')
let btn = document.querySelector('#btn')
let res = document.querySelector('.res')

const pessoa = {
    nome,
    idade, 
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },
    getIdade:function(){
        return this.idade
    },
    setIdade:function(idade){
        this.idade=idade
    },
}

btn.addEventListener('click', ()=>{
    const p = pessoa
    p.nome = txtnome.value
    p.idade = Number(txtidade.value)
    res.innerHTML = `Nome: ${p.getNome()} <br>`
    res.innerHTML += `Idade: ${p.getIdade()}`
})