function* form(){
    let nome = yield 'Qual seu nome?'
    let esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}!`
}

let itc = form()
console.log(itc.next().value)
console.log(itc.next('Messi').value)
console.log(itc.next('Futebol').value)