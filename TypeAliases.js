var persondetails = {
    name: "Harshal",
    age: 27,
    isStudent: true,
    address: {
        city: 'Pune',
        country: 'India'
    }
};
console.log(persondetails);
var product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product));
