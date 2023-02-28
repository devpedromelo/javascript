var elemento = document.querySelector('div#element')
//console.log(elemento)
var p = document.createElement('p')
//console.log(p)
p.textContent = 'Esse é o parágrafo teste'
elemento.appendChild(p)
elemento.removeChild(p)
elemento.remove()