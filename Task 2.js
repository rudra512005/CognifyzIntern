document.addEventListener('DOMContentLoaded', (event) => {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
  
    function showSlide(index) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    nextButton.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  
    prevButton.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  
    // Optionally, you can add automatic slide transition
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000); // Change slide every 5 seconds
  });
  