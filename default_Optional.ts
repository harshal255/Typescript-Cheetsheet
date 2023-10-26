const greeting = (name: string, id?: number): string => {
    if (id) {
        return `Welcome, ${name} and your id is ${id}`;
    } else {
        return `Welcome, ${name}`;
    }


}

console.log(greeting('harshal', 3));
console.log(greeting('harshal'));