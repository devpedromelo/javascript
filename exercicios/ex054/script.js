class Npc{
    static alerta=false
    constructor(energia){
        this.energia = energia
    }
    info=function(){
        console.log(this.energia)
        console.log(Npc.alerta?'sim':'nao')
        console.log('------------------------')
    }
    static alertar = function(){
        Npc.alerta=true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(50)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()