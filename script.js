let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

showSlide(slideIndex);

prevBtn.addEventListener("click", () => {
  showSlide(slideIndex -= 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(slideIndex += 1);
});

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// ----------------js for header links------------
let home=document.getElementById("home");
home.addEventListener("click",function(){
  
})

