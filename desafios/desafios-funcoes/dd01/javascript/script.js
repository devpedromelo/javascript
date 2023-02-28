let num = document.querySelector('input#txtnum')
let res = document.querySelector('div#result')
let array = []
let select = document.getElementById('lselect')
var teste = document.createElement('p')

//Verificando se o num está na lista e se é entre 1 e 100--------------------------------------------
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

//ADICIONANDO NÚMEROS---------------------------------------------------------
function adicionar(){
    if(isNum(num) && inList(num, array)){
        array.push(num.value)
        item = document.createElement('option')
        item.innerText = `O número ${num.value} foi adicionado!`
        select.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML = ''
    }else{
        window.alert('Número inválido ou já encontrado na lista')
    }
}

//REMOVENDO NÚMEROS-----------------------------------------------------------------------------------
function remover(){
    function isList(n, l){
        if(l.indexOf(n.value) != -1){
            return true
        }else{
            return false
        }
    }

    /*function apagarMsg(){
        setTimeout(function(){
            document.getElementById('msg1').innerText = ''
        }, 100);
    }*/


    if(isList(num, array)){
        array.splice(array.indexOf(num.value), 1)
        //encontre a posição do índice num e remova 1 elemento
        var item = document.createElement('option')
        item.innerText = `O número ${num.value} foi REMOVIDO!`
        //apagarMsg()
        select.appendChild(item)
        item.style.background = 'greenyellow'
    }else{
        window.alert('Número já removido ou não encontrado na lista.')
    }
}

//MOSTRANDO NA TELA--------------------------------------------------------------------------
function terminar(){
    let total = array.length
    let maior = array[0]
    let menor = array[0]
    let soma = 0
    let media = 0
    let ordem = array.sort(function(a,b){return a-b})//function para retornar valores numericos em ordem

        for(pos in array){ // mesma coisa que: for(var posicao = 0; posicao < array.length; posicao++)
            soma = soma + Number(array[pos])
            if(Number(array[pos]) > maior){
                maior = Number(array[pos])
            }
            if(Number(array[pos]) < menor){
                menor = Number(array[pos])
            }
            media = soma / total
        }
    
    res.innerHTML = `<h2 id='elementos'>No total temos ${total} elementos</h2>`
    elementos.style.background = 'black'
    elementos.style.color = 'white'
    res.innerHTML += `<h3 id='tittle'>Os números digitados foram ${ordem}.</h3> <br>`
    tittle.style.background = 'lightgray'
    res.innerHTML += `O maior número digitado foi <strong>${maior}</strong>. <br>`
    res.innerHTML += `O menor número digitado foi <strong>${menor}</strong>. <br>`
    res.innerHTML += `A soma de todos os números é <strong>${soma}</strong>. <br>`
    res.innerHTML += `A média de todos os números é <strong>${media}</strong>. <br>`
}