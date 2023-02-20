var num = document.querySelector('input#txtnum')
var res = document.querySelector('div#result')
var select = document.getElementById('flista')
var narray = []

function isNumero(n){
    if( Number(n) >= 1 && Number(n) <= 100){
        return true 
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, narray)){
            narray.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Valor ${num.value} foi adicionado!`
            select.appendChild(item)
            res.innerHTML = ''
        }else{
            window.alert('Número inválido ou já encontrado na lista!')
        }
    num.value = ''
    num.focus()
}

function terminar(){
    if(narray.length == 0){
        window.alert('Adicione valores ante de finalizar!')
    }else{
        var total = narray.length
        var maior = narray[0]
        var menor = narray[0]
        var soma = 0
        var media = 0
            for(var pos in narray){
                soma = soma + narray[pos]
                if(narray[pos] > maior){
                    maior = narray[pos]
                }
                if(narray[pos] < menor){
                    menor = narray[pos]
                }
                media = soma / total
            }
        res.innerHTML = ''
        res.innerHTML += `<h2>Ao todo temos ${total} elementos.</h2>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`
    }
}
