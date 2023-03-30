class pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    info(){
        res.innerHTML+=`Nome: ${this.nome} <br>`
        res.innerHTML+=`Idade: ${this.idade}<br>`
        res.innerHTML+='-------------------------<br>'
    }
}

const pessoas = []
let txtnome = document.querySelector('#nome')
let txtidade = document.querySelector('#idade')
let btn = document.querySelector('#btn')
let res = document.querySelector('.res')

btn.addEventListener('click', ()=>{
    const p = new pessoa(txtnome.value, Number(txtidade.value))
    pessoas.push(p)
    p.info()
    txtnome.value=''
    txtidade.value=''
    txtnome.focus()
    console.log(pessoas)
})