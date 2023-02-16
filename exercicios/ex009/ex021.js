var num = [5, 8, 9, 4]
num[4]=7
num.push(1)
num.sort() //O sort leva em considerção a primeira casa decimal, então se tivesse um 10, ele apareceria em primeiro mesmo sendo maior!
for(var pos = 0; pos < num.length; pos++){
    console.log(`${num[pos]}`)
}
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)