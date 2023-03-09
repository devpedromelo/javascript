const soma=(...valores)=>{
    const somar=(val)=>{
        var res = 0
        for(var c in val){
            res = res + val[c]
        }
        return res
    }
    return somar(valores)
}

console.log(soma(5,10,15,20))