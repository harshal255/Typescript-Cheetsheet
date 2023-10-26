class PersonsTemplate3 {

    constructor(public name: string, public age: number, public hobbies: string[]) {

    }
    introduce(): string {
        return `Hi I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`
    }
}

const persons5 = new PersonsTemplate3("harshal", 18, ["next.js", "react.js"])
console.log(persons5.introduce());