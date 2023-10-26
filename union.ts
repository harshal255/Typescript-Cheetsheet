const userInput = (value: string | number): string | number => {
    if (typeof (value) === "string") {
        return value.toUpperCase();
    }
    else {
        return 2 * value;
    }
}

console.log(userInput("Harshal"));
console.log(userInput(5));


type Person1 = {
    name: string;
    age: number;
}
type Employee = {
    emp_id: number;
    department: string;
}
type EmployeeDetails = Person1 | Employee;


const employee: EmployeeDetails = {
    name: "Harshal",
    age: 20,
    emp_id: 10,

}
console.log(employee);