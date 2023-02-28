//CRIANDO ELEMENTO
var elemento = document.createElement('div')
elemento.classList = 'div-before'
console.log(elemento)
var span = document.createElement('span')
console.log(span)
span.textContent = 'Div entre as listas'
elemento.appendChild(span)

//ADD CONTAINER
var container = document.querySelector('#container')
container.appendChild(elemento)

//CRIANDO ELEMENTO DE REFERÊNCIA - INSERIR ANTES
var elementoRef = document.querySelector('#ul2')
container.insertBefore(elemento, elementoRef)