//---------------------------------EVERY--------------------------------------------------------
//Ele serve para comparar todos os elementos e me retorna true se todos os elementos estiverem em conformidade

const pArray = document.querySelector('#array')
const btn = document.querySelector("#btn")
const res = document.querySelector('#resultado')
const array = [21,56,18,100,22,77,75]

//mostrando as arrays na tela
pArray.innerHTML = `Na array se encontra os seguintes valores: [${array}]`
pArray.style.background = 'white'
pArray.style.color = 'black'
pArray.style.padding = '10px'
pArray.style.borderRadius = '8px'

//pesquisar pela array
btn.addEventListener('click', (evt)=>{
    res.innerHTML='Array não conforme'
    const ret = array.every((e,i)=>{
        if(e<18){
            res.innerHTML = `Array não conforme na posição ${i}`
        }
        return e>=18
    })
    if(ret==true){
         res.innerHTML = 'OK'
    }
})









// btn.addEventListener('click', ()=>{
//     if(array.indexOf(txtPesquisar.value)!=-1){
//         let i = array.indexOf(txtPesquisar.value)
//         res.innerHTML= `O texto ${txtPesquisar.value} foi encontrado na posição ${i}`
//         res.style.background = 'white'
//         res.style.color = 'black'
//         res.style.padding = '10px'
//         res.style.borderRadius = '8px'
//     }
// })