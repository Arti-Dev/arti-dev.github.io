let slideIndex = 1;
let autoplay = true;
const timeout = 5000

function nextSlide() {
    showSlide(slideIndex + 1)
    // user click, stop autoplay
    autoplay = false
}

function prevSlide() {
    showSlide(slideIndex - 1)
    autoplay = false
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide")
    slideIndex = n
    if (slideIndex >= slides.length) slideIndex = 0;
    else if (slideIndex < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block"
}

function randomSlide() {
    let slides = document.getElementsByClassName("slide")
    showSlide(Math.floor(Math.random() * slides.length));
}

function startAutoplay() {
    randomSlide()
    setTimeout(autoNextSlide, timeout)
}

function autoNextSlide() {
    if (autoplay) {
        showSlide(slideIndex + 1)
        setTimeout(autoNextSlide, timeout)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let slides = document.getElementsByClassName("slide");
    if (slides.length > 0) {
        startAutoplay();
    } else {
        console.error("Slides not found");
    }
});