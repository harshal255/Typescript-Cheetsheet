var PersonsTemplate3 = /** @class */ (function () {
    function PersonsTemplate3(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    PersonsTemplate3.prototype.introduce = function () {
        return "Hi I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(","), ".");
    };
    return PersonsTemplate3;
}());
var persons5 = new PersonsTemplate3("harshal", 18, ["next.js", "react.js"]);
console.log(persons5.introduce());
