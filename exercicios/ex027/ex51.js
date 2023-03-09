function* num(){
    let i = 1
    var validacao = true
    while(validacao == true){
        yield i++
        if(i>20){
            validacao = false
        }
    }
}

let numeros = num()
for(var c of numeros){
    console.log(c)
}