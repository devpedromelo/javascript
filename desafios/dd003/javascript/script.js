function verificar(){
    //variaveis
    var ano = new Date()
    var fano = ano.getFullYear()
    var iano = document.querySelector('input#iano')
    var fsexo = document.getElementsByName('radsex')
    var idade = fano - Number(iano.value)
    var res = document.querySelector('div#result')
    //se digitar um numero maior
    if(Number(iano.value) > fano || Number(iano.value) == 0){
        window.alert('[ERRO] O ano que você digitou é maior que o ano atual, verifique os daods e tente novamente')
    }else{
    //condição de genero
        var genero = ''
            if(fsexo[0].checked){
                genero = 'masculino'
            }else{
                genero = 'feminino'
            }
        res.innerHTML = `Detectamos o gênero ${genero} de ${idade} anos!`
        }

        if(genero == 'masculino' && idade >= 0 && idade <= 10){
            criancam.style.display = 'block'
        }
}
