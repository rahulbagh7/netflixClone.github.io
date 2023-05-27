const slider = document.querySelector(".slider");
const sliderItems = document.querySelector(".slider-items");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");

let slideIndex = 0;
const slideWidth = sliderItems.children[0].offsetWidth + parseInt(getComputedStyle(sliderItems.children[0]).marginRight);


let interval = setInterval(slideNext,2000)

function slideNext() {
  if (slideIndex < sliderItems.children.length - 1) {
    slideIndex++;
    sliderItems.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  } else {
    slideIndex = 0;
    sliderItems.style.transform = "translateX(0)";
  }
}

function slidePrev() {
  if (slideIndex > 0) {
    slideIndex--;
    sliderItems.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  } else {
    slideIndex = sliderItems.children.length - 1;
    sliderItems.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
}

prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);
