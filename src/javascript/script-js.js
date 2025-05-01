// carrossel//
const carouselContainer = document.querySelector('.carousel-container');
const indicators = document.querySelectorAll('.indicator');
const totalItems = document.querySelectorAll('.carousel-item').length; 
const itemWidth = 1430; 
let currentIndex = 0; 
const intervalTime = 3000;
let autoSlide;

function updateCarousel(instant = false) {
    const offset = -currentIndex * itemWidth;
    carouselContainer.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
    carouselContainer.style.transform = `translateX(${offset}px)`;

   
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}


function validateIndex() {
    if (currentIndex >= totalItems) {
        currentIndex = 0; 
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1; 
    }
    updateCarousel(true);
}


function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0; 
            updateCarousel(true);
        } else {
            updateCarousel();
        }
    }, intervalTime);
}


function stopAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}


indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        updateCarousel();
    });
});
 
startAutoSlide();