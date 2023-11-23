function initializeSlider(sliderContainerClass) {
  // Get references to the slider and dots container
  const sliderContainer = document.querySelector(sliderContainerClass);
  const slider = sliderContainer.querySelector('.slider');
  const prevButton = sliderContainer.querySelector('.prev-button');
  const nextButton = sliderContainer.querySelector('.next-button');
  const dotsContainer = sliderContainer.querySelector('.slider-dots');

  let slideIndex = 0;

  // Function to show a specific slide and update active class
  function showSlide(index) {
    const slides = slider.querySelectorAll('.slider-item');
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update the slider position
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  // Function to create navigator dots
  function createDots() {
    for (let i = 0; i < slider.children.length; i++) {
      const dot = document.createElement('li');
      dot.classList.add('slider-dot');
      dot.addEventListener('click', () => {
        slideIndex = i;
        showSlide(slideIndex);
        updateDots();
      });
      dotsContainer.appendChild(dot);
    }
  }

  // Function to update the active dot
  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Initialize the slider
  createDots();
  showSlide(slideIndex);

  // Add event listeners for previous and next buttons
  prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = slider.children.length - 1;
    }
    showSlide(slideIndex);
    updateDots();
  });

  nextButton.addEventListener('click', () => {
    if (slideIndex < slider.children.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    showSlide(slideIndex);
    updateDots();
  });

  // Function to programmatically set a slide as active
  function setActiveSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
    updateDots();
  }

  return {
    setActiveSlide,
  };
}
