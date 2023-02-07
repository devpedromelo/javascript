var idade = 10
if (idade > 18 && idade < 67){
    console.log('Adulto')
}else{
    if (idade >=14 && idade <= 18){
        console.log('Adolescente')
    }else{
        if (idade >= 67){
            console.log('Idoso')
        }else{
            console.log('Criança')
        }
    }
}