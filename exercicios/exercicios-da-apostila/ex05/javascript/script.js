var contagem = 0
var res = document.querySelector('div#res')

function clique(){
    contagem = ++contagem

    res.innerHTML = (`O contador está com <strong>${contagem}</strong> cliques.`)
}

function zerar(){
    contagem = 0
    res.innerHTML = (`O contador está com <strong>${contagem}</strong> cliques.`)
}