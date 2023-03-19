const caixa1 = document.querySelector('#caixa1')
const btn = document.querySelector('#copiar')
const caixa2 = document.querySelector('#caixa2')
const todosCursos = [...document.querySelectorAll('.curso')]

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
    })
}

function repassando(){
    let todosSelecionados = [document.querySelector('.seletor')]
    todosSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
}