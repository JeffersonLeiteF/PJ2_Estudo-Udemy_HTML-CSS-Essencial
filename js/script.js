/* //Animação automática dos banners
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
} */
//Animação slider dos produtos
var carousel = document.querySelector(".Carrossel");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  carousel.scrollTo({
    left: carousel.scrollLeft + carousel.offsetWidth,
    behavior: "smooth"
  });
});
prev.addEventListener("click", function () {
  carousel.scrollTo({
    left: carousel.scrollLeft - carousel.offsetWidth,
    behavior: "smooth"
  });
});

//Menu Hamburger
const MenuMobile = document.getElementById('Menu-Mobile');
const header = document.querySelector('header');

function toggleMenu() {
  const nav = document.querySelector('.nav-categorias');
  header.classList.toggle('menu-active');
}

MenuMobile.addEventListener('click', toggleMenu);