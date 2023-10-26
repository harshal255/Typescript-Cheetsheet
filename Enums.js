//user 1 = login =>normal user
//user 2 = login =>admin user
var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Harshal",
    email: "harshal@gmail.com",
    password: "Password",
    role: Roles.admin
};
var user2 = {
    name: "User",
    email: "yeah@gmail.com",
    password: "Password$",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === Roles.admin ? "".concat(email, " is allow to edit the website") : "".concat(name, " is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
