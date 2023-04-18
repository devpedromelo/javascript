//-------------OBJETOS LITERAIS-----------

const objetos = document.querySelector(".objetos")

let computador = {
    cpu:"",
    ram:"",
    hd:'',
    info:function(){
        objetos.innerHTML+=`CPU:${this.cpu}<br>`
        objetos.innerHTML+=`RAM:${this.ram}<br>`
        objetos.innerHTML+=`HD:${this.hd}<br>`
    }
}

computador["monitor"]='22pol'
computador.placaVideo = 'RTX'
delete(computador.hd) 

// const c1 = Object.assign({},computador)//clonar
// console.log(c1)
// c1.info()

const o1 = {obj1:"1"}
const o2 = {obj2:"2"}
const o3 = {obj3:"3"}
const o4 = {o1, o2, o3}
console.log(o4)

const c2 = Object.create(computador)
c2.cpu='i6'
c2.ram='16bg'
c2.hd='2tb'
c2.info()

console.log(computador.cpu)
console.log(computador['ram'])

// const computadores = [
//     {
//         cpu:"i6",
//         ram:"16gb",
//         hd:'2tb'
//     },
//     {
//         cpu:"i9",
//         ram:"64gb",
//         hd:'2tb'
//     },
//     {
//         cpu:"i5",
//         ram:"8gb",
//         hd:'1tb'
//     }
// ]

// computadores.forEach((c)=>{
//     const div = document.createElement("div")
//     div.innerHTML=`${c.cpu}<br>${c.ram}<br>${c.hd}<br>`
//     div.style.padding='10px'
//     objetos.appendChild(div)
// })