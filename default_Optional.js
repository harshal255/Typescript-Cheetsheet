var greeting = function (name, id) {
    if (id) {
        return "Welcome, ".concat(name, " and your id is ").concat(id);
    }
    else {
        return "Welcome, ".concat(name);
    }
};
console.log(greeting('harshal', 3));
console.log(greeting('harshal'));
