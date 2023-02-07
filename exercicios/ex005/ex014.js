var agora = new Date()
var diaSem = agora.getDay()
/*
    0 - Domingo
    1 - Segunda-feira
    2 - Terça-feira
    3 - Quarta-feira
    4 - Quinta-feira
    5 - Sexta-feira
    6 - Sábado
*/

switch(diaSem){
    case 0: 
        console.log('Hoje é domingo!')
        break
    case 1: 
        console.log('Hoje é segunda-feira!')
        break
    case 2: 
        console.log('Hoje é terça-feira!')
        break
    case 3: 
        console.log('Hoje é quarta-feira!')
        break
    case 4:
        console.log('Hoje é quinta-feira!')
        break
    case 5:
        console.log('Hoje é secta-feira!')
        break
    case 6: 
        console.log('Hoje é sábado!')
        break
}