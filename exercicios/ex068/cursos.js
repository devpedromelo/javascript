class Cursos{
    static cursos=['js','html','css','phyton']
    static getTodosCursos=()=>{
        return this.cursos
    }
    static getCursos=(i)=>{
        return this.cursos[i]
    }
    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    static apagarCursos=()=>{
        this.cursos=[]
    }
}

export default Cursos