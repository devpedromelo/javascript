function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('result')
    if(fano.value == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
            if(sex[0].checked) {
               genero = 'Homem'
               if(idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/crianca-masc.png')
               }else if(idade < 22){
                //jovem
                img.setAttribute('src', 'imagens/jovem-masc.png')
               }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-masc.png')
               }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-masc.png')
               }
            }else if(sex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10) {
                    //crianca
                    img.setAttribute('src', 'imagens/crianca-fem.png')
                }else if(idade < 22){
                    //jovem
                    img.setAttribute('src', 'imagens/jovem-fem.png')
                }else if(idade < 50){
                    //adulto
                    img.setAttribute('src', 'imagens/adulto-fem.png')
                }else{
                    //idoso
                    img.setAttribute('src', 'imagens/idoso-fem.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
            res.appendChild(img)
    }
}