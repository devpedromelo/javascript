array = [9, 10]

function menorMaior(){
    var maior = array[0]
    var menor = array[0]
        for(pos in array){
            if(array[pos] > maior){
                maior = array[pos]
            }
            if(array[pos] < menor){
                menor = array[pos]
            }
        }
        return `O maior número é o ${maior} e o menor é ${menor}`
}

console.log(menorMaior())