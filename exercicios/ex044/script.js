const caixa = document.querySelector('.caixa')

let mapa = new Map()
mapa.set("curso","javascrpit")
mapa.set(10,"phyton")
mapa.set(1,100)
mapa.set("canal",100) //valores podem ser iguais mas as chaves não

console.log(mapa)

mapa.delete(1)

let pes = 10
if(mapa.has(pes)){
    caixa.innerHTML = "A chave existe na coleção com o valor: " + mapa.get(pes)
}else{
    caixa.innerHTML = "A chave não existe na coleção"
}

mapa.forEach((el)=>{
    console.log(el)
})