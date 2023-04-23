let nome = new String("Ada Ashley")
let nome2 = new String("Ada Ashley Leon Chris")
let jogo = new String("Resident Evil")

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(1))
console.log(nome.charCodeAt(0))
console.log(nome.concat(jogo))

console.log(nome.indexOf("A"))
console.log(nome.lastIndexOf("A"))

console.log("-----------------------------------")

console.log(nome.localeCompare(nome2))

//Valor de Retorno = 1: Significa que a string principal(primeira string a SER COMPARADA) NÃO mudou ou que ela é maior que a segunda, a que mudou foi a segunda string.

//Valor de Retorno = -1: Significa que a string principal(primeira string a SER COMPARADA) MUDOU em relação a string secundária ou que a primária é menor que a secundária.

//Valor de Retorno = 0: Significa que a string principal(primeira string a SER COMPARADA) e a string secundária são IGUAIS.

console.log(nome.replaceAll("Ashley","Leon"))
//replace substitui um valor por outro valor que for indicado
//ex: nome.replace("valor que quero substituir","valor que quero colocar no lugar")

console.log(nome.search("Ashley"))

let personagemIrritante = nome.slice(4,10)
console.log(personagemIrritante)

let arr = nome2.split(" ")
console.log(arr)