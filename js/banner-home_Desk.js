//Animação automática dos banners
let countD = 1;
document.getElementById("radio-d1").checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage(){
    countD++;
    if(countD>3){
        countD = 1;
    }
document.getElementById("radio-d"+countD).checked = true;
}