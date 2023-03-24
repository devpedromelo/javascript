let txtmes = document.getElementById('imonth')
let tmes = new Date()
console.log(tmes)
let mes = tmes.getMonth()
console.log(mes)
let botao = document.querySelector('#btn')
let resposta = document.querySelector('#res')

botao.addEventListener('click', ()=>{
    resposta.innerHTML = `${txtmes.value}:${mes}`
})