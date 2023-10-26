type PersonInfo = readonly [string, number, boolean];

const displayPersonInfo = (person: PersonInfo): void => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name : ${name},Age: ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`)
}

const person1: PersonInfo = ["Harshal", 19, false];
const person2: PersonInfo = ["Ridham", 19, true];

//person1.push("Harshal") : prevention because of readonly tuples
displayPersonInfo(person1);
displayPersonInfo(person2);