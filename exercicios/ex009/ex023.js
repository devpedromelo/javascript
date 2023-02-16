let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
for(let c in valores){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
let pos = valores.indexOf(4)
console.log(pos)