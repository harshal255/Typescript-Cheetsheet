//multiple generics
const add = <T, U>(a: T, b: U): void => {
    console.log(typeof a);
    console.log(typeof b);
}

const result1: void = add<number, string>(4, "Harshal");
const result2: void = add<string, string>("5", "Harshal");
