var elementos = document.getElementsByTagName('div')
var val = Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)
console.log(val)

//call(array que ele vai percorrer, ({chamada de um método para substituir}))