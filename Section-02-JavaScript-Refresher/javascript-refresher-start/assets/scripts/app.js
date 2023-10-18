/*=========================
# Exports & Imports
 -- In React projects (and actually in all modern JavaScript projects),
 -- you split your code across multiple JavaScript files - so-called modules.
 --You do this, to keep each file/ module focused and manageable.
- To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.
- You got two different types of exports: default (unnamed) and named exports:
===========================*/

// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content} from "./util.js";
// import * as util from "./util.js";
// console.log(util.apiKey);

//    console.log(content);

/*====================
- let  and const  basically replace var.
- You use let  instead of var  and const  instead of var  if you plan on never re-assigning this "variable" (effectively turning it into a constant therefore).
======================*/

// let userMessage = "Hello!";

// console.log(userMessage + ", Ahmed Hesham");

/*====================
# ES6 Arrow Functions
- Arrow functions are a different way of creating functions in JavaScript.
  -- Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword
- Arrow function syntax may look strange but it's actually simple.
======================*/

// function createGreeting(userName, message = "Hello") {
// console.log(userName + " " + message);
//     return "Hi, I am "+userName + " " + message;
// }

// const greeting = createGreeting("Ahmed");
// console.log(greeting);

// console.log(createGreeting("Ahmed", "Hallo, Wie ghet's dir?"));

// export default (userName, message)  => {
//     console.log("Hello!");
//     return userName + message;
// }

// const user = {
//   name: "Ahmed",
//   age: 20,
//   greet() {
//     console.log("Ahmed Hesham");
//     console.log(this.age);
//   },
// };

// console.log(user.name);
// user.greet();

/*====================
# Classes
- Classes are a feature which basically replace constructor functions and prototypes.
  -- You can define blueprints for JavaScript objects with them. 
======================*/

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("============");
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// const newUser = new User("Ahmed Hesham", 20);
// console.log(newUser);

// newUser.greet();

/*====================
# Destructuring
- Destructuring allows you to easily access the values of arrays or objects and assign them to variables.
======================*/

// const hobbies = ["Sports", "Cooking", "Reading"];

// hobbies.unshift("Coding");
// console.log(hobbies[0]);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({text: item}))
// console.log(editedHobbies);

// const [firstName, lastName] = ["Ahmed", "Hesham"];

// console.log(firstName);
// console.log(lastName);

// const { name: userNAme, age } = {
//   name: "Ahmed",
//   age: 20,
// };

// console.log(userNAme, age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Ahmed",
//   age: 20,
// };

/*====================
# Spread & Rest Operator

- The spread and rest operators actually use the same syntax: ... 
- Yes, that is the operator - just three dots.
  -- It's usage determines whether you're using it as the spread or rest operator.
- Using the Spread Operator:
  -- The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements)
  --or pull the properties out of an object.
======================*/

// const newHobbies = ["Reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//     isAdmin: true,
//     ...user,
// }

// console.log(extendedUser);

// const password = prompt("Your Password");

// if (password === "Hello") {
//     console.log("Hello Works");
// } else if(password === "hello"){
//     console.log("hello works");
// } else {
//     console.log("Access not granted");
// }

// const hobbies = ["Sports", "Cooking"];
// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeOut() {
//   console.log("Timed out!");
// }

// const handleTimeOut2 = () => {
//   console.log("Timed out ...again!");
// };

// setTimeout(handleTimeOut, 2000);
// setTimeout(handleTimeOut2, 5000);
// setTimeout(() => {
//   console.log("More timing out");
// }, 4000);

/*====================
# Nested Functions
======================*/

// function init() {
//   function greet() {
//     console.log("Hi!");
//   }

//   greet();
// }

// init();

// let userMessage = "Hello!";
// userMessage = userMessage.concat("!!!!");

// console.log(userMessage);

// const message = "Hello!";

/*====================
- When you push a new element in a constant you don't edit in constant itself,
  -- You just added a new content that memory stored in another place not with it.
======================*/

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Working");
// console.log(hobbies);
