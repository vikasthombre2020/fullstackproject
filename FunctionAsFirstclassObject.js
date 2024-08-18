let fxRates = {
    INR: 72,
    EUR: 0.9
}

let discounts = {
    INR:0.1,
    EUR:0.2
}

let inCart = {
    id: 1,
    total: 81000,
    currency:"INR"
}

let euCart = {
    id: 2,
    total: 772,
    currency: "EUR"
}

function getTotalPriceFn(cart){
    cart.finalTotal = cart.total * (1 - discounts[cart.currency]);

    function totalUSDPrice(){
        return cart.finalTotal / fxRates[cart.currency];
    }
    return totalUSDPrice;
}

let inCartTotalUSD = getTotalPriceFn(inCart)

console.log("type of returned funtion:", typeof inCartTotalUSD);

console.log("total of order from India", inCartTotalUSD());

let euCartTotalUSD = getTotalPriceFn(euCart);
console.log("total of order from EU:", euCartTotalUSD());