let slideIndex = 0;

function nextSlide() {
    showSlide(slideIndex += 1)
}

function prevSlide() {
    showSlide(slideIndex -= 1)
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide")
    if (n >= slides.length) slideIndex = 0;
    else if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block"
}