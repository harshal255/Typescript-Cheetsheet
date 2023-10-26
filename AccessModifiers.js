var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonsTemplate2 = /** @class */ (function () {
    function PersonsTemplate2(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    PersonsTemplate2.prototype.introduce = function () {
        return "Hi I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(","), ".");
    };
    return PersonsTemplate2;
}());
var StudentTemplate2 = /** @class */ (function (_super) {
    __extends(StudentTemplate2, _super);
    function StudentTemplate2(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    StudentTemplate2.prototype.introduce = function () {
        // return `Hi I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")} & grade is ${this.grade}.`
        return "".concat(_super.prototype.introduce.call(this), " & grade is ").concat(this.grade, ".");
    };
    return StudentTemplate2;
}(PersonsTemplate2));
var persons4 = new PersonsTemplate2("Harshal", 12, ["reading", "painting"]);
var student4 = new StudentTemplate2("darshan", 15, ["reading", "painting"], 50);
console.log(persons4.name);
// console.log(persons4.age); -->protected
// console.log(persons4.hobbies)-->private
console.log(persons4.introduce());
console.log(student4.introduce());
