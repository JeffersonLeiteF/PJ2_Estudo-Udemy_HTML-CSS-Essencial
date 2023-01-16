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

/* var carousel = document.querySelector(".Carrossel");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  carousel.scrollLeft += carousel.offsetWidth;
});
prev.addEventListener("click", function () {
  carousel.scrollLeft -= carousel.offsetWidth;
}); */
