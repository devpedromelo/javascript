const caixa1 = document.querySelector('#caixa1')
const btn = document.querySelector('#copiar')
const caixa2 = document.querySelector('#caixa2')
const todosCursos = [...document.querySelectorAll('.curso')]
const selecionadosCaixa2 = []

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
        curso.classList.toggle('seletor')//toggle = se tiver add ele tira, se nao tiver ele add
    })
})

function passando(){
    let todosSelecionados = [document.querySelector('.seletor')]
    todosSelecionados.map((el)=>{
        caixa2.appendChild(el)
        selecionadosCaixa2 = [el]
    })
}

// function repassando(){
//     const selecionadosCaixa1 = selecionadosCaixa2
//     selecionadosCaixa1.map((el)=>{
//         caixa1.appendChild(el)
//     })
// }