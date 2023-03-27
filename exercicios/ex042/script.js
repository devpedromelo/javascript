const pArray = document.querySelector('#array')
const txtPesquisar = document.querySelector('#txtpesquisar')
const btn = document.querySelector("#btn")
const res = document.querySelector('#resultado')
const array = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

//mostrando as arrays na tela
pArray.innerHTML = `Na array se encontra os seguintes valores: ${array}`
pArray.style.background = 'white'
pArray.style.color = 'black'
pArray.style.padding = '10px'
pArray.style.borderRadius = '8px'

//pesquisar pela array
btn.addEventListener('click', (evt)=>{
    res.innerHTML = 'Valor não encontrado'
    array.find((e,i)=>{
        if(e.toUpperCase() == txtPesquisar.value.toUpperCase()){
            res.innerHTML = `O texto ${txtPesquisar.value} foi encontrado na posição ${i}`
        }
    })
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