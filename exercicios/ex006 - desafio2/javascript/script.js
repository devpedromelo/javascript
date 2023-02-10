function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('resultado')
    var img = document.createElement('img')
    img.setAttribute('id', 'photo')
    var formAno = document.querySelector('input#txtano')
        if(Number(formAno.value) > ano || Number(formAno.value) == 0 ){
            window.alert('[ERRO] - Verifique os dados corretamente e tente outra vez!')
        }else{
            var idade = ano - Number(formAno.value)
            var formSexo = document.getElementsByName('rad')
            var genero = ''
                if(formSexo[0].checked){
                    genero = 'Masculino'
                    if(idade >= 0 && idade < 12){
                        img.setAttribute('src', 'imagens/crianca-masc.png')
                    }else if(idade < 21){
                        img.setAttribute('src', 'imagens/jovem-masc.png')
                    } else if(idade < 59){
                        img.setAttribute('src', 'imagens/adulto-masc.png')
                    }else{
                        img.setAttribute('src', 'imagens/idoso-masc.png')
                    }
                }else if(formSexo[1].checked){
                    genero = 'Feminino'
                    if(idade >= 0 && idade < 12){
                        img.setAttribute('src', 'imagens/crianca-fem.png')
                    }else if(idade < 21){
                        img.setAttribute('src', 'imagens/jovem-fem.png')
                    } else if(idade < 59){
                        img.setAttribute('src', 'imagens/adulto-fem.png')
                    }else{
                        img.setAttribute('src', 'imagens/idoso-fem.png')
                    }
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o genero ${genero} de ${idade} anos.`
        res.appendChild(img)
}