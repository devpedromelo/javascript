let res = document.querySelector('#res')
let soma = document.querySelector('#soma')
let subtracao = document.querySelector('#sub')
let multiplicaco = document.querySelector('#multi')
let divisao = document.querySelector('#divisao')


let op = [
    ()=>{
        const valores = [document.querySelector('#num').value,document.querySelector('#num2').value]
        res.innerHTML = `Resultado: ${Number(valores[0]) + Number(valores[1])}`
    },

    ()=>{
        const valores = [Number(document.querySelector('#num').value),Number(document.querySelector('#num2').value)]
        res.innerHTML = `Resultado: ${valores[0] - valores[1]}`
    },

    ()=>{
        const valores = [Number(document.querySelector('#num').value),Number(document.querySelector('#num2').value)]
        res.innerHTML = `Resultado: ${valores[0] * valores[1]}`
    },

    ()=>{
        const valores = [Number(document.querySelector('#num').value),Number(document.querySelector('#num2').value)]
        res.innerHTML = `Resultado: ${valores[0] / valores[1]}`
    }
]

soma.addEventListener('click', ()=>{
    op[0](valores)   
})

subtracao.addEventListener('click', ()=>{
    op[1](valores)
})

multiplicaco.addEventListener('click', ()=>{
    op[2](valores)
})

divisao.addEventListener('click', ()=>{
    op[3](valores)
})