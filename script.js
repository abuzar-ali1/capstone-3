let cart = [];
let totalPrize = 0;

let productName = document.getElementById("product-name").innerText;
let productImg = document.getElementById("product-img").currentSrc;
let proPrize = document.getElementById("product-prize").innerText;

function addToCart(productImg, productName, productPrize) {
  cart.push({ productImg, productName, productPrize });

  totalPrize = totalPrize + productPrize;

  let cartedProductList = document.getElementById("Cart-list");
  let SubTotalPrice = document.getElementById("sub-total-price");

  cartedProductList.innerHTML = "";

  cart.map((items) => {
    const listItem = document.createElement("li");
    const img = document.createElement("img");
    img.src = productImg;
    img.style.width = "100px";
    cartedProductList.appendChild(listItem);
    listItem.innerHTML = `${items.productName}, ${items.productPrize},`;
    listItem.appendChild(img);
    console.log(listItem);
    
    SubTotalPrice.innerText = totalPrize;

  });
}
