var agora = new Date()
var hora = agora.getHours()
if (hora >= 1 && hora <= 5){
    console.log('Boa madrugada!')
} else{
    if (hora < 12){
        console.log('Bom dia!')
    }
    if (hora >= 12 && hora <=18){
        console.log('Boa tarde!')
    }else {
        if (hora > 18){
            console.log('Boa noite!')
        }
    }
}