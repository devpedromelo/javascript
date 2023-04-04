let pessoa ={
    nome: 'Peter',
    sobrenome: 'Parker',
    idade: 22,
    trabalhos:{
        t1: 'homem aranha',
        t2: 'cientista'
    }
}

const sJson = JSON.stringify(pessoa)//convertendo um objeto a uma json
const stringJson = '{"nome":"Peter","sobrenome":"Parker","idade":22,"trabalhos":{"t1":"homem aranha","t2":"cientista"}}'
const objectJson = JSON.parse(stringJson)//convertendo uma json a uma objeto
console.log(pessoa)
console.log(sJson)
console.log(objectJson)