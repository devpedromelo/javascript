//ADD VALORES NO FINAL DA ARRAY
var array = [1,5,4,3]
array.push(16,7)
console.log(array)

//ORDENANDO UMA ARRAY
console.log(array.sort(function(a,b){return a-b}))

//ESCREVENDO QUANTOS VALORES TEM NUMA ARRAY
console.log(array.length)

//PROCURANDO VALORES NUMA ARRAY
console.log(array.indexOf(4))

//REMOVENDO VALORES NO FINAL DA ARRAY
array.pop()
console.log(array)

//ADD VALORES NO INÍCIO DA ARRAY
array.unshift(0)
array.unshift('Primeira String')
console.log(array)

//REMOVENDO VALORES NO INÍCIO DA ARRAY
array.shift('Primeira String')
console.log(array)

//VERIFICANDO SE É UMA ARRAY
console.log(Array.isArray(array))