function verificar(){
    var data = new Date()
    var hora = data.getHours().toFixed(2)
    var res = document.querySelector('div#result')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
        if(hora >= 6 && hora <= 11.59){
            res.innerHTML = `Bom dia! Agora são ${hora} horas da manhã!`
            img.setAttribute('src', 'imagens/manha.png')
            document.body.style.background = 'rgb(236, 209, 91)'
        }else if(hora >= 12 && hora <= 17.59){
            res.innerHTML = `Boa tarde! Agora são ${hora} horas da tarde!`
            img.setAttribute('src', 'imagens/tarde.png')
            document.body.style.background = 'lightsalmon'
        }else{
            res.innerHTML = `Boa noite! Agora são ${hora} horas da noite!`
            img.setAttribute('src', 'imagens/noite.png')
            document.body.style.background = 'rgb(73, 60, 109)'
        }

        res.style.textAlign = 'center'
        res.appendChild(img)
}