type Person2 = {
    name: string;
    age: number;
}
type Employee2 = {
    emp_id: number;
    department: string;
}
type EmployeeDetails2 = Person2 & Employee2;


const employee2: EmployeeDetails2 = {
    name: "Harshal",
    age: 20,
    emp_id: 10,
    department: "fullstack"

}
console.log(employee2);


type User = {
    name: string;
    age: number
}
type MyLocation = {
    city: string;
    country: string;
}

const user: User = {
    name: "Harshal",
    age: 20,
}

const mylocation: MyLocation = {
    city: "ahmedabad",
    country: "India"
}
const createUserProfile = (user: User, location: MyLocation): User & MyLocation => {
    return { ...user, ...location }

}
console.log(createUserProfile(user, mylocation));