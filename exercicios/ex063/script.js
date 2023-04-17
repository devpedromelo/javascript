const btn = document.querySelector("#botao")

btn.addEventListener("click", ()=>{
    const conteudo = document.querySelector("#tabela").innerHTML

    let estilo = "<style>"
    estilo+="table{width: 100%; font: 25px 'Courier New', Courier, monospace;}"
    estilo+="table, th, td{border: solid 2px #888; border-collapse: collapse;"
    estilo+="padding: 8px; text-align: center;}"
    estilo+="</style>"

    let win = window.open('','','height=700,width=700')

    win.document.write('<html><head>')
    win.document.write('<title>Impressora</title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')

    win.print()
})