function sizePopup() {
  const popOpen = document.querySelectorAll('.find-size');
  const popClose = document.querySelectorAll('.pop-close');
  const popScrean = document.querySelectorAll('.pop-size'); // Move this outside

  function toggleClass(element) {
    // Toggle the 'active' class on each popScrean element
    popScrean.forEach((pop) => {
      pop.classList.toggle('active');
    });
  }

  popOpen.forEach((popOpen) => {
    popOpen.addEventListener('click', () => {
      popScrean.forEach((pop) => {
        pop.classList.toggle('active');
      });
    });
  });

  popClose.forEach((popClose) => {
    popClose.addEventListener('click', () => {
      toggleClass(popClose);
    });
  });
}

sizePopup();
