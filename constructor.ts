class PersonsTemplate {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const persons1: PersonsTemplate = new PersonsTemplate("Harshal", 12, ["reading", "painting"]);
const persons2: PersonsTemplate = new PersonsTemplate("darshan", 15, ["reading", "painting"]);

console.log(persons1);
console.log(persons2)
