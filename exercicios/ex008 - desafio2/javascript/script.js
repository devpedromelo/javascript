var res = document.querySelector('div#result')
function tabuada(){
    var num = document.querySelector('input#txtnum')
    var n = Number(num.value)
    var c = 0
    var resultado = ''
    res.innerHTML = '<h2>Contando...</h2> <br>'
        while(c<=10){
            resultado = n * c
            res.innerHTML += `${n} x ${c} = ${resultado} <br>`
            c = c + 1
        }
}