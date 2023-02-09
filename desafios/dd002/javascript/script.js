//var nome = window.prompt('Bem-vindo! Qual o seu nome?')
//window.document.querySelector('div#msg').innerHTML = (`<p>Olá, <strong>${nome}</strong>! Verifique o seu horário e tenha imagens personalizadas de acordo com a hora!</p>`)

function verificar(){
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.querySelector('div#foto')
    var horario = new Date()
    var hora = horario.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 6 && hora <= 11.59){
        fotomanha.style.display = 'block'
        document.body.style.background = 'rgb(250, 207, 127)'
        msg.style.textAlign = 'center'
    }else{
        if(hora >= 12.00 && hora <= 17.59){
            fototarde.style.display = 'block'
            document.body.style.backgroundColor = 'rgb(248, 125, 77)'
            msg.style.textAlign = 'center'
        }else{
            fotonoite.style.display = 'block'
            document.body.style.background = 'rgb(127, 134, 179)'
            msg.style.textAlign = 'center'
        }
    }
}