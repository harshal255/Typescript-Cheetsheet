var MathOperation = /** @class */ (function () {
    function MathOperation() {
    }
    MathOperation.add = function (x, y) {
        return x + y;
    };
    MathOperation.substraction = function (x, y) {
        return x - y;
    };
    MathOperation.PI = Math.PI;
    return MathOperation;
}());
console.log(MathOperation.PI);
console.log(MathOperation.add(3, 4));
console.log(MathOperation.substraction(3, 4));
