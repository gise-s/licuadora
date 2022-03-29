var estadoLicuadora="apagada";
var sonidoLuciadora= document.getElementById("blender-sound");
var botonLicuadora= document.getElementById("blender-button-sound");
var licuadora= document.getElementById("blender");
function controlarLicuadora(){
    if(estadoLicuadora=="apagada"){
        estadoLicuadora= "encendida";
        licuadora.classList.add("active"); 
        hacerBRR();
        console.log("me prendiste")
    } else {
        estadoLicuadora= "apagada";
        licuadora.classList.remove("active"); 
        hacerBRR();
        console.log("me apagaste")
    }
}
function hacerBRR(){
    if(sonidoLuciadora.paused){
        botonLicuadora.play();
        sonidoLuciadora.play();
    } else{
        botonLicuadora.play();
        sonidoLuciadora.pause();
        sonidoLuciadora.currentTime=0;
    }
}