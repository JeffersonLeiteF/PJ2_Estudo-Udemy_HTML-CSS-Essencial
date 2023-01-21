//Animação automática dos banners
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }    
document.getElementById("radio"+count).checked = true;
}

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
  /* nav.classList.toggle('active'); */
  header.classList.toggle('menu-active');
}

MenuMobile.addEventListener('click', toggleMenu);