//-------------------FUNÇÕES ANÔNIMAS---------------------

let soma = function(n1, n2){
    var res = n1 + n2
    return res
}

let multi = function(n1, n2){
    var res = n2 * n1
    return res
}

console.log(soma(2,2))
console.log(multi(5,8))

//--------------FUNÇÕES ANÔNIMAS E CALLBACK-----------------

let exibir = function(res){
    console.log(`Resultado da subtração: ${res}`)
}

let sub = function(n1, n2, cb){ //callback
    var res = n1 - n2
        if(n1 < n2){
            res = 'Impossível subtrair'
            cb(res)
        }else{
            cb(res)
        }
}

sub(15, 10, exibir)