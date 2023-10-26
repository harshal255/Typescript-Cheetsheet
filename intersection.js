var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var employee2 = {
    name: "Harshal",
    age: 20,
    emp_id: 10,
    department: "fullstack"
};
console.log(employee2);
var user = {
    name: "Harshal",
    age: 20,
};
var mylocation = {
    city: "ahmedabad",
    country: "India"
};
var createUserProfile = function (user, location) {
    return __assign(__assign({}, user), location);
};
console.log(createUserProfile(user, mylocation));
