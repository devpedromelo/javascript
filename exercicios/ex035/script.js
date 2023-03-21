const caixa = document.querySelector('.caixa')
const cursos = [...document.querySelectorAll('.curso')]

console.log(caixa.hasChildNodes())//verifica se o element possui um child
console.log(cursos[0].hasChildNodes())
console.log(caixa.children[2].innerHTML='Testando')

caixa.addEventListener('click', (evt)=>{
    console.log('clicou na caixa')
    evt.stopPropagation()
    console.log(caixa.children.length > 0 ? 'Possui filho' : 'NÃO possui filho')
})

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        console.log(`clicou no ${el.innerText}`)
        evt.stopPropagation()
        console.log(cursos[0].children.length ? 'Possui filho' : 'NÃO possui filho')
    })
})