/*quickview*/

document.addEventListener('click', function(event) {
  var target = event.target.closest('.quick-view-button');
  if (target) {
    var product_url = target.getAttribute('data-product-id');

    let p_response = fetch(product_url)
      .then((response) => response.json())
      .then((data) => {
        showquickView(data);
      })
      .catch(error => {
        console.error('ERROR: Quick look is not working. Please let the developer theme now.:', error);
      });
  }
});



document.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});
document.querySelectorAll('.modal-close, .quick-view-product').forEach((el) => {
  el.addEventListener('click', () => {
    let img_area = document.getElementById('ql-product-image-area');
    let title_area = document.getElementById('ql-product-title');
    //let desc_area = document.getElementById('ql-description');
    let optionsContainer = document.getElementById('options-container');
    const originalPriceSpan = document.querySelector('.original-price');
    const discountedPriceSpan = document.querySelector('.discounted-price');
    const add = document.querySelector('#add-to-cart');
    // Reset the content of modified elements to their initial state
    img_area.innerHTML = ''; // Clear the product image
    title_area.innerHTML = ''; // Clear the product title
    //desc_area.innerHTML = ''; // Clear the product description
    optionsContainer.innerHTML = ''; // Clear the product options
    originalPriceSpan.innerHTML = ''; // Clear the product options
    discountedPriceSpan.innerHTML = ''; // Clear the product options
    add.innerHTML = '';
    // Toggle the visibility of the quick view modal
    document.getElementById('quick-view-modal').classList.remove('active');
  });
});