var quantityInput = document.querySelector('.add-to-cart .quantity input');
var decreaseButton = document.querySelector('.add-to-cart .q-down');
var increaseButton = document.querySelector('.add-to-cart .q-up');

decreaseButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

increaseButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});