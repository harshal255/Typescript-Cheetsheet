class PersonsTemplate1 {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age; 
        this.hobbies = hobbies;
    }
    introduce(): string {
        return `Hi I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`
    }
}

class StudentTemplate1 extends PersonsTemplate1 {
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies)
        this.grade = grade;
    }
    introduce(): string {
        // return `Hi I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")} & grade is ${this.grade}.`
        return `${super.introduce()} & grade is ${this.grade}.`
    }


}
const persons3: PersonsTemplate1 = new PersonsTemplate1("Harshal", 12, ["reading", "painting"]);
const student3: StudentTemplate1 = new StudentTemplate1("darshan", 15, ["reading", "painting"], 50);

console.log(persons3.introduce());
console.log(student3.introduce());
