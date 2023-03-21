let caixa = document.querySelector(".caixa")
const curso = [document.querySelector(".curso")]
const todosCursos = ["HTML", "CSS", "Javascript", "PHP", "React", "Phyton","React native"]

todosCursos.map((el,i)=>{
    const novoElemento = document.createElement('div')
    novoElemento.innerText = el
    novoElemento.setAttribute('id', `c${i+1}`)
    novoElemento.setAttribute('class', 'curso')
    caixa.appendChild(novoElemento)
})
