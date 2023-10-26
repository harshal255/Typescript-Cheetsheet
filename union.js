var userInput = function (value) {
    if (typeof (value) === "string") {
        return value.toUpperCase();
    }
    else {
        return 2 * value;
    }
};
console.log(userInput("Harshal"));
console.log(userInput(5));
var employee = {
    name: "Harshal",
    age: 20,
    emp_id: 10,
};
console.log(employee);
