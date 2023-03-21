const caixa1 = document.querySelector('#caixa1')
const passando = document.querySelector('#btn')
const repassando = document.querySelector('#btn2')
const excluir = document.querySelector('#btn3')
const caixa2 = document.querySelector('#caixa2')
const todosCursos = [...document.querySelectorAll('.curso')]
let selecionadosCaixa2 = []

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
        curso.classList.toggle('seletor')//toggle = se tiver add ele tira, se nao tiver ele add
    })
})

passando.addEventListener('click', ()=>{
    const todosSelecionados = [...document.querySelectorAll('.seletor')]
    todosSelecionados.map((el)=>{
        if(el in caixa2 == false){
            caixa2.appendChild(el)
            el.classList.remove('seletor')
            selecionadosCaixa2 = [el]
            console.log(selecionadosCaixa2)
        }else if(el in caixa2 == true){
            window.alert('Sai dessa')
        }
    })
})

repassando.addEventListener('click', ()=>{
    const todosSelecionados = [...document.querySelectorAll('.seletor')]
    todosSelecionados.map((el)=>{
        if(el in caixa1 == false){
            caixa1.appendChild(el)
            el.classList.remove('seletor')
            selecionadosCaixa2 = [el]
            console.log(selecionadosCaixa2)
        }else if(el in caixa1 == true){
            window.alert('Sai dessa')
        }
    })
})

excluir.addEventListener('click', ()=>{
    const todosSelecionados = [...document.querySelectorAll('.seletor')]
    todosSelecionados.map((el)=>{
        el.remove('seletor')
    })
})