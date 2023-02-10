function numero(){
    var num = Number(window.prompt('Digite um número: '))
    var numAbs = Math.abs(num) //numero absoluto
    var numInt = Math.trunc(num) //numero inteiro
    var numProx = Math.ceil(num) //numero próximo
    var numRaizq = Math.sqrt(num) // raíz quadrada
    var numRaizc = Math.cbrt(num) //raíz cúbica 
    var numAoq = num ** 2 // ao quadrado
    var numAoc = num ** 3 // a cubo
    var res = document.querySelector('div#res')

res.innerHTML = (`O número a ser analisado aqui é o: ${num}...<hr> Seu número absoluto: ${numAbs} <br> Seu número inteiro: ${numInt} <br> Número mais próximo: ${numProx} <br> A sua raíz quadrada: ${numRaizq} <br> A sua raíz cúbica: ${numRaizc} <br> O valor de ${num}<sup>2</sup>: ${numAoq} <br> O valor de ${num}<sup>3</sup>: ${numAoc}`)
}