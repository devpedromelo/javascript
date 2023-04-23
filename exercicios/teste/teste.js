
let starboy = ''
let partyMonster= ''
let falseAlarm= ''
let reminder= ''
let rockin= ''
let secrets= ''
let trueColors= ''
let stargirlInterlude= ''
let sidewalks= ''
let sixFeetUnder= ''
let loveTheLay= ''
let lonelyNight= ''
let attention= ''
let ordinaryLife= ''
let nothingWithOutYou= ''
let allIKnow= ''
let dieForYou= ''
let iFellItComing=''

let soma = 0
let media = 0

const stBoy = [
    starboy= 10,
    partyMonster= 10,
    falseAlarm= 10,
    reminder= 10,
    rockin= 8,
    secrets= 9,
    trueColors= 8.3,
    stargirlInterlude= 8,
    sidewalks= 10,
    sixFeetUnder= 9,
    loveTheLay= 8,
    lonelyNight= 8,
    attention= 10,
    ordinaryLife= 10,
    nothingWithOutYou= 9.5,
    allIKnow= 9,
    dieForYou= 10,
    iFellItComing = 10
]

for(i in stBoy){
    soma = soma + stBoy[i]
}

media = soma/stBoy.length

console.log(stBoy)

console.log(soma)

console.log(media)