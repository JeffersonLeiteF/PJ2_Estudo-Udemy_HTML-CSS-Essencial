//Animação automática dos banners mobile
let countM = 1;
document.getElementById("radio-m1").checked = true;

setInterval( function(){
    nextImageM();
}, 10000)

function nextImageM(){
    countM++;
    if(countM>3){
        countM = 1;
    }
document.getElementById("radio-m"+countM).checked = true;
}