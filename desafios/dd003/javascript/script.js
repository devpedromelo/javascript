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
            if(sex[0].checked) {
               genero = 'Homem' 
            }else if(sex[1].checked){
                genero = 'Mulher'
            }
            res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }
}