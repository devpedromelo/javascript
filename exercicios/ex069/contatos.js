import { contatos } from "./bancoContatos.js";

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(indiceContato){
        return contatos[indiceContato]
    },
    addContato:function(novoContato,destino){
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)
        console.log(contatos)

        destino.innerHTML = ''

        contatos.forEach((c)=>{
            const div = document.createElement("div")
            div.setAttribute("class","contato")
            const btnRemover = document.createElement("button")
            btnRemover.setAttribute("id",'remover')
            btnRemover.innerText = 'Remover'
            const pNome = document.createElement("p")
            pNome.innerHTML=c.nome
            const pTelefone = document.createElement("p")
            pTelefone.innerHTML=c.telefone
            const pEmail = document.createElement("p")
            pEmail.innerHTML=c.email
            div.appendChild(pNome)
            div.appendChild(pTelefone)
            div.appendChild(pEmail)
            div.appendChild(btnRemover)
            destino.appendChild(div)
            btnRemover.addEventListener("click",()=>{
                let contatoIndice = contatos.indexOf(c)
                contatos.splice(contatoIndice,1)
                div.remove()
            })
        })
    }
}

export default contato