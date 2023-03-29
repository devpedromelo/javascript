const caixa = document.querySelector('.caixa')

let musicas = new Set(["Take What You Want", "Remainder", "Goosembumps"])

musicas.add('Desires')
musicas.add("Take What You Want")
musicas.add("Take What You Want")
musicas.add("Remainder")

musicas.delete('Desires')

console.log(musicas)
//não permite valores duplicados

// musicas.forEach((el)=>{
//     caixa.innerHTML+=el+"<br>"
// })

for(let m of musicas){
    caixa.innerHTML+=m+"<br>"
}