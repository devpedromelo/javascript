//CRIANDO ELEMENTO
var titulo = document.createElement('h3')
titulo.classList = 'tittle-h3'
titulo.textContent = 'Titulo criado'
console.log(titulo)

//ADD O ELEMENTO QUE QUERO SUBSTITUIR
var titulo1 = document.querySelector('#tittle')
var h1 = titulo1.parentNode //elemento pai do tittle
console.log(h1)

//TROCANDO O ELEMENTO
h1.replaceChild(titulo, titulo1)
//1- Elemento pai
//2- replaceChild
//3- (elemento que eu quero que SUBSTITUA, elemento que eu quero SUBSTITUIR)