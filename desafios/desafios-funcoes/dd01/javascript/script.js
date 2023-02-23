let num = document.querySelector('input#txtnum')
let res = document.querySelector('div#result')
let array = []
let select = document.getElementById('lselect')

//Verificando se o num está na lista e se é entre 1 e 100
function isNum(n){ 
    if(n.value >= 1 && n.value <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(n.value) == -1){
        return true
    }else{
        return false
    }
}

//
function adicionar(){
    if(isNum(num) && inList(num, array)){
        array.push(num.value)
        var item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado!`
        select.appendChild(item)

        num.value = ''
        num.focus()
        res.innerHTML = ''
    }else{
        window.alert('Número inválido ou já encontrado na lista')
    }
}

function terminar(){
    let total = array.length
    let maior = array[0]
    let menor = array[0]
    let soma = 0
    let media = 0
        for(var posicao in array){
            soma = soma + Number(array[posicao])
            media = soma / total
            if(array[posicao] > maior){
                maior = array[posicao]
            }
            if(array[posicao] < menor){
                menor = array[posicao]
            }
        }
    res.innerHTML = `<h2>No total temos ${total} elementos</h2>`
    res.innerHTML += `O maior número digitado foi <strong>${maior}</strong>. <br>`
    res.innerHTML += `O menor número digitado foi <strong>${menor}</strong>. <br>`
    res.innerHTML += `A soma de todos os números é <strong>${soma}</strong>. <br>`
    res.innerHTML += `A média de todos os números é <strong>${media}</strong>.`
}