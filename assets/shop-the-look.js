function shopTheLook() {
  const productPoints = document.querySelectorAll('.product-point');
  const productClose = document.querySelectorAll('.product-list-item');
  function toggleClass(element) {
    const productPointArea = element.closest('.product-point-area');
    productPointArea.classList.toggle('active');
  }
  productPoints.forEach((productPoint) => {
    productPoint.addEventListener('click', () => {
      toggleClass(productPoint);
    });
  });
  productClose.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      toggleClass(closeButton);
    });
  });
  
}
shopTheLook();
