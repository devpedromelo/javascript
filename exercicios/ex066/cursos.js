const cursos=['js','html','css','phyton']

export default function todosOsCursos(){
    return cursos
}

function getCursos(i){
    return cursos[i]
}

export {cursos,getCursos}