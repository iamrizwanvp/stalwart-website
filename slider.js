let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// document.addEventListener('DOMContentLoaded', function() {
//     const slidesContainer = document.querySelector('.slides');
//     const slides = document.querySelectorAll('.slide');
//     const totalSlides = slides.length;
//     let currentIndex = 0;

//     function showSlide(index) {
//         const offset = -index * 100; // Slide width is 100%, so -index * 100% for left shift
//         slidesContainer.style.transform = `translateX(${offset}%)`;
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         showSlide(currentIndex);
//     }

//     setInterval(nextSlide, 3000); // Change slide every 3 seconds
// });


function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    } else {
        navMenu.classList.add('show');
    }
}
