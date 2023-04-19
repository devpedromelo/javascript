import contato from "./contatos.js"
const listaContatos = document.getElementById("listaContatos")
const botao = document.querySelector("#gravar")
const excluir = document.querySelector("#excluir")

botao.addEventListener("click",()=>{
    const cont={
        nome:document.querySelector("input#inome").value,
        telefone:document.querySelector("input#itelefone").value,
        email:document.querySelector("input#iemail").value
    }
    contato.addContato(cont,listaContatos)
})

excluir.addEventListener("click",()=>{
    const cont={
        nome:document.querySelector("input#inome").value,
        telefone:document.querySelector("input#itelefone").value,
        email:document.querySelector("input#iemail").value
    }
    contato.removerContato(cont)
})