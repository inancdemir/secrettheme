function initializeProductClickHandling() {
  const products = document.querySelectorAll('.product-point-area');
  
  products.forEach((product, index) => {
    product.addEventListener('click', () => {
      products.forEach((prod, idx) => {
        prod.classList.add('non-active');
        prod.classList.remove('active');
      });
      product.classList.remove('non-active');
      product.classList.add('active');
    });

    const closeButton = product.querySelector('.close');
    closeButton.addEventListener('click', function(event) {
      event.stopPropagation(); 
      const productArea = product;
      productArea.classList.remove('active');
      productArea.classList.remove('non-active');
    });
  });

  document.addEventListener('click', (event) => {
    const isProductArea = event.target.closest('.product-point-area');
    if (!isProductArea) {
      products.forEach((product) => {
        product.classList.remove('active');
        product.classList.add('non-active');
      });
    }
  });
}
initializeProductClickHandling();
