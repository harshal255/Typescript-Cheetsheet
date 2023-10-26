type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string;
    }
}

const persondetails: Person = {
    name: "Harshal",
    age: 27,
    isStudent: true,
    address: {
        city: 'Pune',
        country: 'India'
    }
}
console.log(persondetails);
type Product = {
    name: string;
    price: number;
    quantity: number;
}

const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}

const calculateTotalPrice = (product: Product) => {
    return product.price * product.quantity;

}
console.log(calculateTotalPrice(product))