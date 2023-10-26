class PersonsTemplate2 {
    public name: string;
    protected age: number;
    private hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce(): string {
        return `Hi I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`
    }
}


class StudentTemplate2 extends PersonsTemplate2 {
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
const persons4: PersonsTemplate2 = new PersonsTemplate2("Harshal", 12, ["reading", "painting"]);
const student4: StudentTemplate2 = new StudentTemplate2("darshan", 15, ["reading", "painting"], 50);

console.log(persons4.name);
// console.log(persons4.age); -->protected
// console.log(persons4.hobbies)-->private
console.log(persons4.introduce());
console.log(student4.introduce());
