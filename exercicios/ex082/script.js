//----------------------WEB STORAGE------------------------

const text = document.querySelector("#texto")
const p = document.querySelector("p")
const btn = document.querySelector("#btn")

btn.addEventListener("click",(evt)=>{

})

let num = 10
let curso = 'javascript'
// window.
localStorage.setItem("nome", 'Messi')
localStorage.setItem("curso", curso)
localStorage.setItem("numero", num)
localStorage.setItem("numero", 4657890)

// alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key(0)))
// alert(localStorage.getItem("numero"))
localStorage.clear()

sessionStorage.setItem("nome", 'Messi')
sessionStorage.setItem("curso", curso)
sessionStorage.setItem("numero", num)
sessionStorage.setItem("numero", 4657890)