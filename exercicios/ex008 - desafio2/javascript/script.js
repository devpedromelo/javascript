var res = document.querySelector('div#result')
function tabuada(){
    var num = document.querySelector('input#txtnum')
    var tab = document.getElementById('settab')
    var n = Number(num.value)
    var c = 0
    var resultado = ''
    tab.innerHTML = ''
        while(c<=10){
            var item = document.createElement('option')
            resultado = n * c
            item.text = `${n} x ${c} = ${resultado}`
            tab.appendChild(item)
            c = c + 1
        }
}