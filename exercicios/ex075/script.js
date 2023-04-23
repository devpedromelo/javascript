let nome = new String("Leon Chris 1996")
let jogo = 'Resident Evil 4 remake'
let numeros = '1,10,100,1000'

console.log(nome)
console.log(nome.search(/Chris/i))

console.log(nome.match(/o/ig))

console.log(nome.replace(/leon/i,"Ada"))


//METACARACTERES
console.log(nome.match(/[a-m|0-9]/ig))
console.log(nome.match(/\d/ig))//apenas numeros
console.log(nome.match(/\s/ig))//espaços
console.log(nome.match(/\bL/ig))//caracteres


//QUANTIFICADORES
console.log(nome.match(/o+|i+/ig))
console.log(nome.match(/on*/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))