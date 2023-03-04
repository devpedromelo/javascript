//ADD VALORES NO MEIO DA ARRAY
var array = [1,5,4,3,16,7]
array.sort(function(a,b){return a-b})
console.log(array)
array.splice(3,0,99)
//indice que eu quero colocar/se eu quero substituir o numero que está nesse índice/o número que eu quero colocar
console.log(array)

//REMOVENDO VALORES DA ARRAY UTILIZANDO O SPLICE
array.splice(1, 3)
//indice que quero remover/quantos quero remover
console.log(array)

//TRANSFORMANDO UMA ARRAY EM UMA STRING
var array2 = ['o', 'messi', 'é', 'um', 'dos', 'melhores', 'jogadores']
console.log(array2)
console.log(array2.join(' '))
console.log(array.join('|'))

//REVERTENDO UMA ARRAY
console.log(array.reverse().join('|'))