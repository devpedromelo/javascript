const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index){
    slide.style.left = `${index * 100}%`
});

let counter = 0;
function carousel(){
    slides.forEach(function (slide) {
        if(counter > 3){
            counter = 0
        } 
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

nextBtn.addEventListener("click", function(){
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function(){
    counter--;
    carousel();
});