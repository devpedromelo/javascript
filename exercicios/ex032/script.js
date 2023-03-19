const cursos = [...document.querySelectorAll('.curso1, .curso2')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        console.log(evt.target.innerText)//target = traz o elemento que disparou o evento
    })
})