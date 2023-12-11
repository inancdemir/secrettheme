function initializeTabbedContent() {
    const tabHeaders = document.querySelectorAll('.tab-list .h4');
    const tabContentWrappers = document.querySelectorAll('.collection-tabs .wrapper');
    tabHeaders[0].classList.add('active');
    tabContentWrappers[0].classList.add('active');
    tabHeaders.forEach((tabHeader, index) => {
      tabHeader.addEventListener('click', () => {
        tabHeaders.forEach(header => {
          header.classList.remove('active');
        });
        tabContentWrappers.forEach(wrapper => {
          wrapper.classList.remove('active');
        });
        tabHeader.classList.add('active');
        const dataName = tabHeader.getAttribute('id');
        const activeWrapper = document.querySelector(`.wrapper[data-name="${dataName}"]`);
        activeWrapper.classList.add('active');

        var flkty = new Flickity('.active .slide-wrapper', {
          cellAlign: 'left',       
          prevNextButtons: true,   
          pageDots: false,         
          groupCells: 1,  
          cellSelector: '.carousel-slider-item',
        });
        flkty.reloadCells();
      });
    });
  }
  
  // Call the function to initialize the tabbed content
  
  document.addEventListener("DOMContentLoaded", function () {
    initializeTabbedContent();
      var flkty = new Flickity('.active .slide-wrapper', {
          // Options
          cellAlign: 'left',       // Align the first slide to the left
          prevNextButtons: true,   // Show previous and next buttons
          pageDots: false,         // Hide the page dots
          groupCells: 1,
          cellSelector: '.carousel-slider-item',
      });
      flkty.reloadCells();
  });