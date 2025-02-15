let slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

// Increment slideIndex by n
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Set slideIndex to n
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the current slide and its corresponding dot
function showSlides(n) {
    // Ensure slideIndex is within bounds
    slideIndex = ((n - 1) % slides.length + slides.length) % slides.length + 1;

    // Hide all slides and remove the active class from all dots
    Array.from(slides).forEach(slide => slide.style.display = "none");
    Array.from(dots).forEach(dot => dot.classList.remove("active"));

    // Show the current slide and set its corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Toggle menu visibility
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}
