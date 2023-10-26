class MathOperation {
    public static PI: number = Math.PI;
    public static add(x: number, y: number) {
        return x + y;
    }
    public static substraction(x: number, y: number) {
        return x - y;
    }
}

console.log(MathOperation.PI);
console.log(MathOperation.add(3, 4))
console.log(MathOperation.substraction(3, 4))