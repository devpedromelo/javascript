//-------------------CALLBACK FUNCTIONS---------------------
//----------SÍNCRONA

function exibirSoma(n){
    console.log(`O resultado da soma foi: ${n}` )
}

function exibirMulti(n){
    console.log(`O resultado da multiplicação foi: ${n}` )
}

function soma(a, b, callback){
    var res = a + b
    callback(res) //callback pode ser chamado de cb
}

function multi(a, b, callback){
    var res = a * b
    callback(res)
}

soma(2, 2, exibirSoma)
multi(5, 3, exibirMulti)