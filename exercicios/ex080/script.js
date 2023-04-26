const longitude = document.getElementById("long")
const latitude = document.getElementById("lati")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocal, erroLocal)
}else{
    console.log("Não suportado")
}

function mostrarLocal(pos){
    longitude.innerHTML = pos.coords.longitude
    latitude.innerHTML = pos.coords.latitude
}

function erroLocal(pos){
    console.log('Erro ao obter a localização!')
}