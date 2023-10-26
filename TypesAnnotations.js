//Todo : substring
var str1 = "Harshal";
var str2 = "Kahar";
var str = str1.substring(0, str1.length - 1) + str2;
console.log(str);
//Todo :String Comparison
var bool1 = str1 === str2;
var bool2 = str1 == str2;
var bool3 = str1 !== str2;
var bool4 = str1 != str2;
console.log(bool1, bool2, bool3, bool4);
//Todo : String templates 
console.log("my combinations of string is ".concat(str));
