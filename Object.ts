const person: {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string;
    }
} = {
    name: "Harshal",
    age: 27,
    isStudent: true,
    address: {
        city: 'Pune',
        country: 'India'
    }
}
console.log(person);