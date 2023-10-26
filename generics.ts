//reusable components
//work with multiple datatypes

const logAndReturn = <T>(value: T): T => {
    return value;
};


const result: number = logAndReturn<number>(42);

const text: string = logAndReturn<string>("Hello, world");

const obj: { key: string } = logAndReturn<{ key: string }>({ key: "value" });
console.log(result, text, obj);
