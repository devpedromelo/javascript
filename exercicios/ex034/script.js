//---------------REFERENCIANDO UM ELEMENTO DOM-----------------------------------------

//Parent Node = elemento pai
//Siblings = Irmãos
//Child = elemento filho
const caixa = document.querySelector('.caixa')
const cursos = [...document.querySelectorAll('.curso')]


console.log(document.getRootNode())
console.log(document.ownerDocument())
console.log(caixa.children[caixa.children.length-2])
console.log(caixa.firstElementChild)
console.log(caixa.lastElementChild)
console.log(caixa.children)