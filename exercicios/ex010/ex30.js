function produto(preco, valor, trocado=0){
        if(preco > valor){
            console.log('O dinheiro não é o suficiente para comprar o produto.')
        }else{
            console.log(`Você deu R$${valor.toLocaleString('pt-br')} para comprar um produto de R$${preco.toLocaleString('pt-br')}.`)
            trocado = preco - valor
                if(trocado == 0){
                    console.log('A compra não tem troco.')
                }else{
                    console.log(`Seu troco é de R$${trocado.toLocaleString('pt-br')}`)
                }
        }
}

console.log('COMPRA DE PRODUTOS')
produto(1000, 1500)