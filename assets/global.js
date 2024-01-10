function openCartDrawer() {
  document.querySelector('.cart-drawer').classList.add('cart-drawer--active');
}

function closeCartDrawer() {
  document.querySelector('.cart-drawer').classList.remove('cart-drawer--active');
}

function updateCartItemCounts(count) {
  document.querySelectorAll('.cart-count').forEach((el) => {
    el.textContent = count;
  });
}

async function updateCartDrawer() {
  //console.log("burası");
  try {
    const res = await fetch('/?snippet_id=cart-drawer');
    const text = await res.text();
    var html = document.createElement('div');
    html.innerHTML = text;
    var newBox = html.querySelector('.cart-drawer').innerHTML;
    document.querySelector('.cart-drawer').innerHTML = newBox;
    addCartDrawerListeners();
  } catch (error) {
    console.error(error);
  }
}


function addCartDrawerListeners() {
  // Update quantities
  document.querySelectorAll('.cart-drawer-quantity-selector button').forEach((button) => {
    button.addEventListener('click', async () => {
      // Get line item key
      const rootItem = button.parentElement.parentElement.parentElement.parentElement.parentElement;
      const key = rootItem.getAttribute('data-line-item-key');

      // Get new quantity
      const currentQuantity = Number(button.parentElement.querySelector('input').value);
      const isUp = button.classList.contains('cart-drawer-quantity-selector-plus');
      const newQuantity = isUp ? currentQuantity + 1 : currentQuantity - 1;

      // Ajax update\
      const res = await fetch('/cart/update.js', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ updates: { [key]: newQuantity } }),
      });
      const cart = await res.json();

      updateCartItemCounts(cart.item_count);

      // Update cart
      updateCartDrawer();
    });
  });

  document.querySelector('.cart-drawer-box').addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.querySelectorAll('.cart-drawer-header-right-close, .cart-drawer').forEach((el) => {
    el.addEventListener('click', () => {
      console.log('closing drawer');
      closeCartDrawer();
    });
  });
}

addCartDrawerListeners();

document.querySelectorAll('form[action="/cart/add"]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Submit form with ajax
    await fetch('/cart/add', {
      method: 'post',
      body: new FormData(form),
    });

    // Get cart count
    const res = await fetch('/cart.js');
    const cart = await res.json();
    updateCartItemCounts(cart.item_count);

    // Update cart
    await updateCartDrawer();

    // Open cart drawer
    openCartDrawer();
  });
});

document.querySelectorAll('a[href="/cart"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  });
});




function adjustSecondDivHeight() {
  var firstDivHeight = document.querySelector('.main-navigation').offsetHeight;
  var secondDiv = document.querySelector('#header-background-color');

  secondDiv.style.height = firstDivHeight + 'px';
}

window.addEventListener('load', adjustSecondDivHeight);
window.addEventListener('resize', adjustSecondDivHeight);


/* main header settings*/
function addHasTopBarClass() {
  const topBarElement = document.querySelector('#site-header .top-bar');
  const headerLink = document.querySelector('#site-header');
  const headerBackground = document.querySelector('#header-background-color');
    
  if (topBarElement && headerLink) {
    headerLink.classList.add('has-top-bar');
  }

  if (topBarElement && headerBackground) {
    headerBackground.classList.add('has-top-bar');
  }

}
function addStickyOnScroll(scrollAmount, elementId) {
  const element = document.getElementById(elementId);

  window.addEventListener('scroll', function() {
    if (window.scrollY >= scrollAmount) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  });
}
/*sticky end*/

function addHasMenuSubClass() {
  // Get all <li> elements with the class "has-child"
  const hasChildItems = document.querySelectorAll('li.has-child');

  // Loop through each <li> element and check for the presence of a descendant <div> with class "mega-menu-wrap"
  hasChildItems.forEach((liElement) => {
    const megaMenuWrap = liElement.querySelector('.mega-menu-wrap');

    // If a <div> with class "mega-menu-wrap" exists, add the class "has-menu-sub" to the <li> element
    if (megaMenuWrap) {
      liElement.classList.add('has-menu-sub');
    }
  });
}






/*mobile drawer menu start*/
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mainNavigation = document.querySelector('.main-navigation');
  const hasChild = document.querySelector('.has-child');
  const searchWrapper = document.querySelector('.search-wrap');
  const searchClose = document.querySelector('.search-close');
  const searchOpen = document.querySelector('.search-link');
  var element = document.querySelector(".search-clear");
  var inputElement = document.querySelector(".search-clear-input");
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function () {
      mainNavigation.classList.toggle('active');
    });
  }
  if (hasChild) {
    hasChild.addEventListener('mouseover', function () {
      mainNavigation.classList.toggle('hovered');
    });
  }
  if (searchClose) {
    searchClose.addEventListener('click', function () {
      searchWrapper.classList.toggle('active');
      if (element) {
        element.style.display = "none";
      }
      if (inputElement) {
        inputElement.value = "";
    }
      
    });
  }
  if (searchOpen) {
    searchOpen.addEventListener('click', function () {
      searchWrapper.classList.toggle('active');
    });
  }

  const openSub = document.querySelector('.open-sub');

  if (openSub) {
    openSub.addEventListener('click', function () {
      const siblingUl = openSub.nextElementSibling; // Find the next sibling element

      if (siblingUl) {
        if (siblingUl.classList.contains('child-level-one')) {
          siblingUl.classList.toggle('active');
        } else if (siblingUl.tagName === 'DIV') {
          siblingUl.classList.toggle('active');
        }
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const mainNavigation = document.querySelector('.main-navigation');

  if (mainNavigation) {
    mainNavigation.addEventListener('click', function (event) {
      const target = event.target;

      // Check if the clicked element has the class "open-sub"
      if (target.classList.contains('open-sub')) {
        const siblingUl = target.nextElementSibling;

        // Check if the sibling is a <ul> with class "child-level-one" or a <div>
        if (siblingUl && (siblingUl.classList.contains('child-level-one') || siblingUl.tagName === 'DIV')) {
          siblingUl.classList.toggle('active');
        }
      }
    });
  }
});


/*mobile drawer menu end */
/*localization*/
/*
document.addEventListener('DOMContentLoaded', function() {
  // İlgili düğmeyi seçin
  var buttonWhere = document.querySelector('.disclosure__button');

  // İlgili liste öğesini seçin
  var listWrapper = document.querySelector('.disclosure__list-wrapper');

  // Düğmeye tıklandığında işlemi tanımlayın
  buttonWhere.addEventListener('click', function() {
    // 'hidden' özelliğini tersine çevirerek görünürlüğü değiştirin
    listWrapper.hidden = !listWrapper.hidden;
  });
});
*/
