({a,b,c,d}={a:'vermelho',b:'azul',c:'amarelo',d:'verde'})
let numeros = [10,20,30,40]
let [e,f,g,h] = numeros
let i=50;
let j=60;
[i,j]=[j,i]

console.log(a,b,c,d)
console.log(e,f,g,h)
console.log(i,j)

console.log("-------------------------------------------")

let num=()=>{
    return [100,200,300,400]
}

let [n1,n2,n3,n4]=num()
console.log(n1,n2,n3,n4)

console.log("-------------------------------------------")

let n = [10,20,30,40,50,60,70,80,90]
let [num1,num2,num3,...num4]=n
console.log(num1,num2,num3,num4)

console.log("-------------------------------------------")

let obj = {nome:'Guilherme', canal:'FunckyBlackCat'}
let {nome,canal}=obj
console.log(nome,canal)

console.log("-------------------------------------------")

let cores = ()=>{
   return ['laranja', 'branco','roxo','rosa']
}

let[c1,c2,,c3]=cores()
console.log(c1,c2,c3)

console.log("-------------------------------------------")

let texto = 'Curso de Javascript'
let [...t] = texto.split(" ")

console.log(t)