const coll = document.getElementsByClassName("collapsible");
collapsible();
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function collapsible() {
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      coll[i].classList.toggle("active");
      let content = this.nextElementSibling;
      (content.style.display === "block") ?
        content.style.display = "none" :
        content.style.display = "block";
    });
  }
}
