//multiple generics
var add = function (a, b) {
    console.log(typeof a);
    console.log(typeof b);
};
var result1 = add(4, "Harshal");
var result2 = add("5", "Harshal");
console.log(result1, result2);
