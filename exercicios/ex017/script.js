//ACESSANDO ELEMENTOS PELO DOCUMENT
console.log(document.body)
console.log(document.head)

//POSICIONANDO UM ELEMENTO ENTRE OUTRO
var link = document.querySelector('#links')
console.log(link)
var container = link.parentNode
console.log(container)
var elementoRef = document.querySelector('#btn')
console.log(elementoRef)
container.insertBefore(link, elementoRef)

//SUBSTITUINDO UM ELEMENTO PELO DOCUMENT
console.log(document.links[0])
document.links[0].textContent = 'Instagram'
console.log(document.title)
document.title = 'Acessando pelo Document'