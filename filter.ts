let _arr = [3, 4, 5, 6]

const _double: number[] = _arr.filter((ele: number) => ele < 5);
console.log(_double);

//if i use map method instead of filter method then its give boolean element that's limitation of map method
//so we use filter method for filter out elements from arrays