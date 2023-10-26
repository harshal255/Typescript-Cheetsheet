//user 1 = login =>normal user
//user 2 = login =>admin user

enum Roles {
    user, admin
}

type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles;
}

const user1: LoginDetails = {
    name: "Harshal",
    email: "harshal@gmail.com",
    password: "Password",
    role: Roles.admin
}

const user2: LoginDetails = {
    name: "User",
    email: "yeah@gmail.com",
    password: "Password$",
    role: Roles.user
}

const isAdmin = (user: LoginDetails): string => {
    const { name, email, role } = user;
    return role === Roles.admin ? `${email} is allow to edit the website` : `${name} is not allow to edit the website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));