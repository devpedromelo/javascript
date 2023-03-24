let caixa = document.querySelector(".caixa")
const curso = [document.querySelector(".curso")]
const todosCursos = ["HTML", "CSS", "Javascript", "PHP", "React", "Phyton","React Native"]

todosCursos.map((el,i)=>{
    const novoElemento = document.createElement('div')
    novoElemento.innerText = el
    novoElemento.setAttribute('id', `c${i+1}`)
    novoElemento.setAttribute('class', 'curso')
    caixa.appendChild(novoElemento)
    novoElemento.addEventListener('click',(evt)=>{
        var elemento = evt.target
        novoElemento.setAttribute('class', 'curso seletor')
    })
})