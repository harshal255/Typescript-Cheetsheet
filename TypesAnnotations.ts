//Todo : substring
let str1: string = "Harshal";
let str2: string = "Kahar";

let str: string = str1.substring(0, str1.length - 1) + str2;
console.log(str);

//Todo :String Comparison
let bool1: boolean = str1 === str2;
let bool2: boolean = str1 == str2;
let bool3: boolean = str1 !== str2;
let bool4: boolean = str1 != str2;
console.log(bool1, bool2, bool3, bool4);

//Todo : String templates 
console.log(`my combinations of string is ${str}`);