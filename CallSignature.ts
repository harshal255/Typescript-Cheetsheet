type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string //method call signature
}

const student1: Student = {
    name: "Vinod",
    age: 15,
    greet: (country: string): string => `Welcome my name is ${student1.name}, I am ${student1.age} yrs old & i am from ${country}`
}
const student2: Student = {
    name: "Harshal",
    age: 30,
    greet: (country: string): string => `Welcome my name is ${student2.name}, I am ${student2.age} yrs old & i am from ${country}`
}

const introduction: (student1: Student) => string = (student1: Student): string => {
    const { name, age } = student1;
    return `Welcome my name is ${name}, I am ${age} yrs old`
}

console.log(introduction(student1));
console.log(student1.greet('India'))
console.log(student2.greet('India'))