// function to get total calculation---------------
function getTotalPrice(prod, price) {
    // getting price field values --------------
    const extraProdCost = document.getElementById(prod + '-cost');
    extraProdCost.innerText = price;

    // calling function to get extra product prices ----------
    const extraProductPrices = getExtraProductsPrice();

    // calculating total price here ----------------
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = extraProductPrices + 1299;

    // updating final price here -----------------
    const finalPrice = document.getElementById('final-price');
    finalPrice.innerText = totalPrice.innerText

    // removing disable button here -----------------
    const button = document.getElementById('promo-button');
    button.removeAttribute('disabled', 'true');
}

// function to get extra product prices --------------
function getExtraProductsPrice() {
    const memoryPrice = document.getElementById('extra-memory-cost').innerText;
    const storagePrice = document.getElementById('extra-storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const price = parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    return price;
}

// hiding discount message----------------------
document.getElementById('discount-message').style.display = 'none';

// adding event handller for buttons here ----------------
document.getElementById('8gb-memory-button').addEventListener('click', function () {
    getTotalPrice('extra-memory', '0');
})

document.getElementById('16gb-memory-button').addEventListener('click', function () {
    getTotalPrice('extra-memory', '180');
})

document.getElementById('256gb-ssd-button').addEventListener('click', function () {
    getTotalPrice('extra-storage', '0');
})

document.getElementById('512gb-ssd-button').addEventListener('click', function () {
    getTotalPrice('extra-storage', '100');
})

document.getElementById('1tb-ssd-button').addEventListener('click', function () {
    getTotalPrice('extra-storage', '180');
})

document.getElementById('free-delivery-button').addEventListener('click', function () {
    getTotalPrice('delivery', '0');
})

document.getElementById('paid-delivery-button').addEventListener('click', function () {
    getTotalPrice('delivery', '20');
})

document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');

    // adding condition for promo code ----------------
    if (promoInput.value == 'stevekaku') {
        const finalPrice = document.getElementById('final-price');
        const newfinalPrice = parseInt(finalPrice.innerText) - (parseInt(finalPrice.innerText) / 100) * 20;
        finalPrice.innerText = newfinalPrice;

        // disabling button after applying promo ----------
        const button = document.getElementById('promo-button');
        button.setAttribute('disabled', 'true');

        // updating final price ----------------
        const discountAmount = document.getElementById('discount-amount');
        discountAmount.innerText = parseInt((parseInt(finalPrice.innerText) / 100) * 20);

        // displaying discount amount and message
        document.getElementById('discount-message').style.display = 'block';
    }
})

