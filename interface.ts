interface Greet {
    name: string;
    age: number
}
interface Greet1 {
    rollno: number
}

const greet1: Greet & Greet1 = {
    name: "Harshal",
    age: 25,
    rollno: 5,

}

console.log(greet1);