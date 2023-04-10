//-------------------------CRIANDO O RELÓGIO-------------------------

let divRelogio = document.querySelector("#relogio")
let horaDoAlarme = document.querySelector("#horaDoAlarme")
let secAlarme = document.querySelector("#number")//input
let ativar = document.querySelector("#ativar")
let desativar = document.querySelector("#desativar")
let res = document.querySelector("#res")

let atual = null //pegar os milisegundos atuais
let alarme = null //guardar o alarme
let alarmeAtivado = false
let alarmeTocando = false

ativar.addEventListener("click", ()=>{
    atual = Date.now()//milisegundos atuais
    alarme = atual + (secAlarme.value*1000)//milisegundos atuais + o valor do input transformado em milisegundo
    alarmeAtivado = true
    const dataAlarme = new Date(alarme)
    console.log(dataAlarme)
    horaDoAlarme.innerHTML=`Hora do Alarme: ${dataAlarme.getHours()<10?"0"+dataAlarme.getHours():dataAlarme.getHours()}:${dataAlarme.getMinutes()<10?"0"+dataAlarme.getMinutes():dataAlarme.getMinutes()}:${dataAlarme.getSeconds()<10?"0"+dataAlarme.getSeconds():dataAlarme.getSeconds()}`
})

const tempoReal = ()=>{
    let relogio = new Date()
    let hora = relogio.getHours()
    hora = hora<10?"0"+hora:hora
    let min = relogio.getMinutes()
    min = min<10?"0"+min:min
    let sec = relogio.getSeconds()
    sec = sec<10?"0"+sec:sec
    divRelogio.innerHTML = `${hora}:${min}:${sec}`
    //---------------CRIANDO O ALARME---------------------
    if(alarmeAtivado == true && alarmeTocando == false){
        if(relogio.getTime() >= alarme){
            alarmeTocando=true
            res.innerHTML = 'ALARME ESTÁ TOCANDO!!!!!!!!!!!!!!!!!!'
            res.classList.add("alarme")
        }
    }
}
const intervalo=setInterval(tempoReal, 1000)

desativar.addEventListener("click", ()=>{
    alarmeAtivado = false
    alarmeTocando = false
    horaDoAlarme.innerHTML = 'Hora do Alarme:'
    secAlarme.value = '0'
    res.innerHTML = ''
    res.classList.remove("alarme")
})