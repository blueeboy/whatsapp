// Select DOM elements
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('menu');
const container = document.getElementById('container');



// Show the menu
hamburger.addEventListener('click', () => {
  menu.classList.add('show');
});

// Close the menu
close.addEventListener('click', () => {
  menu.classList.remove('show');
});



// script.js
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 530}px)`;
}

function nextSlide() {
    if (currentIndex < totalCards - 1) {
        cards[currentIndex].classList.add('hidden');
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        cards[currentIndex].classList.remove('hidden');
        updateCarousel();
    }
}


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


const features = document.querySelector('#features');
const dropdownMenu = document.querySelector('.dropdown-menu');

features.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});