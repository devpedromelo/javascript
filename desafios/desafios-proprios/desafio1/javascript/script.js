var res = document.querySelector('div#result')
var img = document.createElement('img')
img.setAttribute('id', 'foto')

function verificar(){
    var txtano = new Date()
    var ano = txtano.getFullYear()
    var tano = document.querySelector('input#txtano')
        if(tano.value == 0 || tano.value > ano){
            window.alert('[ERRO] - O ano que você digitou não existe ou é maior que o ano atual, preencha os dados corretamente.')
        }else{
            var radsex = document.getElementsByName('rad')
            var idade = ano - Number(tano.value)
            var genero = ''
                if(radsex[0].checked){
                    genero = 'masculino'
                        if(idade > 0 && idade <= 12){
                            //criança
                            img.setAttribute('src', 'imagens/crianca-masc.png')
                        }else if(idade < 21){
                            //jovem
                            img.setAttribute('src', 'imagens/jovem-masc.png')
                        }else if(idade < 59){
                            //adulto
                            img.setAttribute('src', 'imagens/adulto-masc.png')
                        }else{
                            //idoso
                            img.setAttribute('src', 'imagens/idoso-masc.png')
                        }
                }else if(radsex[1].checked){
                    genero = 'feminino'
                    if(idade > 0 && idade <= 12){
                        //criança
                        img.setAttribute('src', 'imagens/crianca-fem.png')
                    }else if(idade < 21){
                        //jovem
                        img.setAttribute('src', 'imagens/jovem-fem.png')
                    }else if(idade < 59){
                        //adulto
                        img.setAttribute('src', 'imagens/adulto-fem.png')
                    }else{
                        //idoso
                        img.setAttribute('src', 'imagens/idoso-fem.png')
                    }
                }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos o gênero ${genero} de ${idade} anos.`
            res.appendChild(img)
        }
}