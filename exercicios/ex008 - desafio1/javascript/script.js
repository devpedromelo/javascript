var ini = document.getElementById('txtinicio')
var fim = document.querySelector('input#txtfim')
var passo = document.querySelector('input#txtc')
var res = document.querySelector('div#result')

function contar(){
    if(ini.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert('[ERRO] - Impossível contar, por favor, leve em conta o número 1!')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        var contador = i
            if(contador <= f){
                while(contador <= f){
                    res.innerHTML += ` ${contador} <br>`
                    contador = contador + p
                }
            }else if(contador >= f){
                while(contador >= f){
                    res.innerHTML += ` 👉${contador} <br>`
                    contador = contador - p 
                }
            }
    }
    res.innerHTML += ' 🏁'
}