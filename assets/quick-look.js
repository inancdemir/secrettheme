/*quickview*/
var productQL = document.querySelectorAll('.quick-view-button');
productQL.forEach(function (item, index) {
  item.addEventListener(
    'click',
    function (e) {
      var product_url = this.getAttribute('data-product-id');
      console.log(product_url);
      let p_response = fetch(product_url)
        .then((response) => response.json())
        .then((data) => {
          showquickView(data);
        });
    },
    false
  );
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
    // Reset the content of modified elements to their initial state
    img_area.innerHTML = ''; // Clear the product image
    title_area.innerHTML = ''; // Clear the product title
    //desc_area.innerHTML = ''; // Clear the product description
    optionsContainer.innerHTML = ''; // Clear the product options
    originalPriceSpan.innerHTML = ''; // Clear the product options
    discountedPriceSpan.innerHTML = ''; // Clear the product options

    // Toggle the visibility of the quick view modal
    document.getElementById('quick-view-modal').classList.remove('active');
  });
});