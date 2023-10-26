var PersonsTemplate = /** @class */ (function () {
    function PersonsTemplate(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return PersonsTemplate;
}());
var persons1 = new PersonsTemplate("Harshal", 12, ["reading", "painting"]);
var persons2 = new PersonsTemplate("darshan", 15, ["reading", "painting"]);
console.log(persons1);
console.log(persons2);
