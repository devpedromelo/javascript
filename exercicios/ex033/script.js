const caixa1 = document.querySelector('#caixa1')
const todosCursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evento)=>{
    console.log('Clicou na caixa')
})

todosCursos.map((el)=>{
    el.addEventListener('click', (evento)=>{
        console.log(`Clicou no ${el.
        innerText}`)  
        evento.stopPropagation()
    })
})
