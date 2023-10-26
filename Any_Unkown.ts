//unkown
let num: unknown;
num = 4;
num = "thapa";
num = true;
if (typeof num === 'number') {
    console.log(num + 5);
} else if (typeof num === 'boolean') {
    console.log(num);
}