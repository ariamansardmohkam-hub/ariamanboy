const rate = 89000 / 80;

let input = document.getElementById("cp");
let priceText = document.getElementById("price");

input.addEventListener("input", updatePrice);

function updatePrice(){
    let cp = parseInt(input.value);

    if(!cp || cp <= 0){
        priceText.innerText = "قیمت: 0 تومان";
        return;
    }

    let price = Math.round(cp * rate);

    priceText.innerText = "قیمت: " + price.toLocaleString() + " تومان";
}

function setCP(val){
    input.value = val;
    updatePrice();
}

function buy(){
    let cp = parseInt(input.value);

    if(!cp || cp <= 0){
        alert("اول مقدار CP را وارد کن");
        return;
    }

    window.location.href = "order.html";
}