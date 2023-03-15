//----------------------------------UTILIZANDO O MAP--------------------------------------------------
//Só se utiliza-se o map quando queremos percorrer TODA a array, pois ele não aceita uma quebra ou uma parada no meio da array, ou em qualquer outro contexto.
//Quando queremos executar um código só uma vez no meio da array e NÃO executá-lo mais, nesse caso o melhor é utilizar uma estrutura de repetição.
let cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
let c = cursos.map((el, i) => {
    if(i<2){
        return `O curso ${el} está na posição ${i}`
    }else{
        return 'Acabou'
    }
})
console.log(c)
//map(elemento que vai percorrer a cada interação, índice dele)

console.log('--------------------------------------')

for(c in cursos){
    var cur = cursos[c]
    if(c<=2){
        console.log(`O curso ${cur} está na posição ${c}`)
    }else{
        console.log(`Acabou`)
        break
    }
}