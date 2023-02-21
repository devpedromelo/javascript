function antNext(n){
   let nNext = n + 1
   let nAnt = n - 1
   console.log(`O número escolhido foi ${n}`)
   console.log(`O antescessor de ${n} é ${nAnt}`)
   console.log(`O sucessor de ${n} é ${nNext}`)
   return n
}
let num = antNext(5)
console.log(`${num}`)