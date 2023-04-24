const quadrado1 = document.querySelector("#q1")
const quadrado2 = document.querySelector("#q2")
const posx=document.querySelector("#posx")
const posy=document.querySelector("#posy")
const altura=document.querySelector("#altura")
const largura=document.querySelector("#largura")

quadrado1.accessKey='p'//tecla de atalho alt+p
quadrado2.accessKey='n'//tecla de atalho alt+n

console.log(quadrado1.accessKey)
console.log(quadrado2.accessKey)

const domRect = (el)=>{
    const dRect = el.getBoundingClientRect()
    posx.innerHTML = `posx: ${dRect.x}`
    posy.innerHTML = `posy: ${dRect.y}`
    largura.innerHTML = `largura: ${dRect.width}`
    altura.innerHTML = `altura: ${dRect.height}`
}

quadrado1.addEventListener("click",(evt)=>{
    domRect(evt.target)
})

quadrado2.addEventListener("click",(evt)=>{
    domRect(evt.target)
})