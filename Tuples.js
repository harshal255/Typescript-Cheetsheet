var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name : ".concat(name, ",Age: ").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
var person1 = ["Harshal", 19, false];
var person2 = ["Ridham", 19, true];
//person1.push("Harshal") : prevention because of readonly tuples
displayPersonInfo(person1);
displayPersonInfo(person2);
