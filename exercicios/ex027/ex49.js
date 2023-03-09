//--------------------------FUNÇÕES GERADORAS----------------------------------------

function* cores(){      //caracterizadas por ter um asterístico
    yield 'Vermelho'    //yield é um tipo de retorno, que só é retornado quando chamado no próprio console.log, é um retorno parecido com o significado de ter um retorno de investimento.
    yield 'Preto'
    yield 'Cinza'
    yield 'Azul'
}

const itc = cores()
for(var c=0; c<4; c++){
    console.log(itc.next().value)
}