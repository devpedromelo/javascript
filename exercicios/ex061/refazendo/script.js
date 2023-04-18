let relogio = document.querySelector("#relogio")
let txtHoraDoAlarme = document.querySelector("#horaDoAlarme")
let hAlarme = document.querySelector("#h")
let mAlarme = document.querySelector("#m")
let ativar = document.querySelector("#ativar")
let desativar = document.querySelector("#desativar")
let res = document.querySelector("#res")

let alarmeAtivado = false
let alarmeTocando = false
let secAtual = null
let alarme = null

ativar.addEventListener("click", ()=>{
    secAtual = Date.now()
    alarme = secAtual + ((hAlarme.value*3600)*1000)+((mAlarme.value*60)*1000)
    alarmeAtivado = true
    let horarioDoAlarme = new Date(alarme)
    console.log(horarioDoAlarme)
    let hora = horarioDoAlarme.getHours()
    let min = horarioDoAlarme.getMinutes()
    txtHoraDoAlarme.innerHTML = `Hora do Alarme: ${hora<10?"0"+hora:hora}:${min<10?"0"+min:min}h`
})

hora=()=>{
    let horario = new Date()
    let hora = horario.getHours()
    let min = horario.getMinutes()
    let sec = horario.getSeconds()
    relogio.innerHTML = `${hora<10?"0"+hora:hora}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec}`
    if(alarmeAtivado == true && alarmeTocando == false){
        if(horario>=alarme){
            alarmeTocando = true
            txtHoraDoAlarme.innerHTML = "ALARME ESTÁ TOCANDO!!!!!"
            document.body.style.background = 'rgb(255, 64, 64)'
        }
    }
}

const intervalo = setInterval(hora,1000)

desativar.addEventListener("click", ()=>{
    txtHoraDoAlarme.innerHTML = "Hora do Alarme: 00:00:00"
    hAlarme.value = '0'
    mAlarme.value = '0'
    alarmeAtivado = false
    alarmeTocando = false
    secAtual = null
    alarme = null
    res.innerHTML=''
    document.body.style.background='white'
})