import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ram",
    email: "ram@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Hari",
    email: "hari@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
