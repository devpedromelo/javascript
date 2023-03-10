function* num(){
    let c = 1
    let validacao = true
    while(validacao == true){
        yield c++
        if(c > 10){
            validacao = false
        }
    }
}

let numeros = num()
for(c of numeros){
    console.log(c)
}