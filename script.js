if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var cartBtns = document.getElementsByClassName('cartBtn');
    for (var i = 0; i < cartBtns.length; i++) {
        var cartBtn = cartBtns[i];
        cartBtn.addEventListener('click', addToCartClicked);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-item');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(cartRow.getElementsByClassName('cart-price')[0].innerHTML.replace('$', ''));        
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('product-name')[0].innerText;
    var price = parseFloat(shopItem.getElementsByClassName('product-price')[0].innerText.replace('$', ''));
    var imageSrc = shopItem.getElementsByClassName('product-img')[0].src;    
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-title');       
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerHTML == title) {
            alert('This item is already added to the cart');
            return;
        }
    }
    cartItems.append(cartRow);
    var cartRowContents = `
        <div class="my-1 cart-item border border-1 border-secondary">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center width-set">
              <img class="img-fluid" src="${imageSrc}" alt="">
              <p class="font-size cart-title heading1">${title}</p>
            </div>
            <p class="heading3 cart-price">${price}</p>
            <div class="d-flex align-items-center justify-content-between w-25">
              <input type="number" class="w-50 cart-quantity-input" value="1">
              <button class="btn-remove border-0 bg-transparent">
                <iconify-icon icon="bi:trash" noobserver></iconify-icon>
              </button>
            </div>
          </div>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}
