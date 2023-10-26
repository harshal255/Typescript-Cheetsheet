//reusable components
//work with multiple datatypes
var logAndReturn = function (value) {
    return value;
};
var result = logAndReturn(42);
var text = logAndReturn("Hello, world");
var obj = logAndReturn({ key: "value" });
console.log(result, text, obj);
