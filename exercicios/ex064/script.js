//-------------OBJETOS LITERAIS-----------

const objetos = document.querySelector(".objetos")

let computador = {
    cpu:"i6",
    ram:"16gb",
    hd:'2tb',
    info:function(){
        objetos.innerHTML+=`CPU:${this.cpu}<br>`
        objetos.innerHTML+=`RAM:${this.ram}<br>`
        objetos.innerHTML+=`HD:${this.hd}<br>`
    }
}

computador["monitor"]='22pol'
computador.placaVideo = 'RTX'

console.log(computador.cpu)
console.log(computador['ram'])

const computadores = [
    {
        cpu:"i6",
        ram:"16gb",
        hd:'2tb'
    },
    {
        cpu:"i9",
        ram:"64gb",
        hd:'2tb'
    },
    {
        cpu:"i5",
        ram:"8gb",
        hd:'1tb'
    }
]

computadores.forEach((c)=>{
    const div = document.createElement("div")
    div.innerHTML=`${c.cpu}<br>${c.ram}<br>${c.hd}<br>`
    div.style.padding='10px'
    objetos.appendChild(div)
})

// computador.info()