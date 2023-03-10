function* music(){
    let m = yield 'Take What You Want'
    let cantor = yield 'Post Malone'
    return `A música ${m} é do cantor ${cantor}!`
}

const itc = music()
console.log(itc.next().value)
console.log(itc.next('Take What You Want').value)
console.log(itc.next('Post Malone').value)