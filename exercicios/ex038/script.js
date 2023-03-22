//-----------------------FILTER---------------------------
//o metodo filter serve para filtrar elementos especificos de uam array

const numeros = [7,5,68,9,68,8,7]
console.log(numeros)
const numerosSemDuplicacoes = (new Set(numeros))
console.log(numerosSemDuplicacoes)

// numeros.filter((valores,indice,array)=>{
//     if(array.indexOf(valores)!=-1){
//         console.log(valores)
//         array.splice(valores)
//     }
// })

// var idades = [15,44,50,76,12,50,14,9]
// var maior = idades.filter((valor, indice, array)=>{
//     if(valor >= 18){
//         return `Os maiores que 18 são ${valor}`
//     }
// })

// var menor = idades.filter((valor)=>{
//     if(valor <= 18){
//         return `Os menores que 18 são ${valor}`
//     }
// })

// console.log(`Os maiores que 18 são ${maior}`)
// console.log(`Os menores que 18 são ${menor}`)