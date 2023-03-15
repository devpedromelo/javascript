function aluno(nome,nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },1500)
    }

    this.dados_arrow=function(){ //uma arrow function resolve o problema do this de conseguir se referenciar nos this de cima usando o setTimeOut.
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },1500)
    }
}

const al1=new aluno('Julio', 100)
al1.dados_anonimo()
al1.dados_arrow()