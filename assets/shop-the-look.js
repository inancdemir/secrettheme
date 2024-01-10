/*function shopTheLook() {
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
shopTheLook();*/

// Ürünlerin tıklanabilir olması için her birini seçin
const products = document.querySelectorAll('.product-point-area');

// Her ürün için tıklama olayı ekleme
products.forEach((product, index) => {
    product.addEventListener('click', () => {
        // Tüm ürünlere 'non-active' sınıfını ekle
        products.forEach((prod, idx) => {
            prod.classList.add('non-active');
            prod.classList.remove('active');
        });

        // Tıklanan ürüne 'active' sınıfını ekle
        product.classList.remove('non-active');
        product.classList.add('active');
    });

    // .close elementine tıklandığında
    const closeButton = product.querySelector('.close');
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Tıklama olayının üst elemanlara iletilmesini engelle

        const productArea = product;
        productArea.classList.remove('active');
        productArea.classList.remove('non-active');
    });
});

// Boş bir alana tıklandığında seçili durumu kaldırma
document.addEventListener('click', (event) => {
    const isProductArea = event.target.closest('.product-point-area');
    if (!isProductArea) {
        products.forEach((product) => {
            product.classList.remove('active');
            product.classList.add('non-active');
        });
    }
});
