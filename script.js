document.addEventListener('DOMContentLoaded', () => {
   
// HERO SECTION - Typewriter effect
    const text = "Ready, Sail, Go! ";
    const typewriterElement = document.getElementById("typewriter");
    let i = 0; 

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 250); // Adjust typing speed
        } else {
            // Reset after typing finishes
            setTimeout(() => {
                typewriterElement.textContent = ""; // Clear text
                i = 0; // Reset index
                typeWriter(); // Restart typing
            }, 3000); // Pause before restarting
        }
    }

    typeWriter(); // Start the typewriter effect
    
// ABOUT SECTION - Carousel
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;
    let currentIndex = 0;

    function slideCarousel() {
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to the start
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

        // Auto-slide every 3 seconds
    setInterval(slideCarousel, 3000);

// Testimonial Carousel
    const carousel = document.getElementById('testimonial-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let testimonialIndex = 0; // Renaming to avoid conflict

    function updateCarousel() {
        const width = carousel.clientWidth;
        carousel.style.transform = `translateX(-${testimonialIndex * width}px)`;
    }

    function showNext() {
        testimonialIndex = (testimonialIndex + 1) % 3; // 3 testimonials
        updateCarousel();
    }

    function showPrev() {
        testimonialIndex = (testimonialIndex - 1 + 3) % 3; // Loop back
        updateCarousel();
    }

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Auto-slide every 5 seconds
    setInterval(showNext, 5000);

    window.addEventListener('resize', updateCarousel); // Ensure proper alignment on resize

// Hamburger menu for mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
  
});
