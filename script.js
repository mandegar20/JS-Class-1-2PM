//
// JAVASCRIPT: is a high level, multi paradigm, object oriented programming language.
//
// Use:
// 1. Frontend
// 2. Backend  Node.js
// 3. Native App mobile  react native
// 4. Desktop application   electron
//

// console.log("Hello World!");
// console.log("mohammad");
// console.log("witout semicolon");
// console.log("12 + (342 / 2) * 2 - 100");
// console.log("wajid" + "12");

// ============================ VALUES AND VARIABLES ====================================================
// value
// let student = "mohammad";
// console.log(student);
// student = "bilal";
// console.log(student);

// console.log(student);

// ============================== Data Type ============================
/// General 2 types:
// 1. object
// 2. primitive

//let studentName = "Shahab";
// let studentsName = ["shahab", "Mohammad", "Abdullah", 20, true ];

// 1. number      45   8.7
// 2. String      "computer"  "t"  "121212"
// 3. Boolean     true, false
// 4. Undefined     empty
// 5. null    empty
// 6. Symbol
// 7. BigInt   big numbers

// console.log(typeof null);

// let a = "Book";
// console.log(a);

// a = 12;
// console.log(a);

// let b;
// console.log(typeof b);

// ===================================== var, let, const ==========================

// var bookStorePoleSurkh = 1233;
// console.log(bookStorePoleSurkh);

// let computer = 40000;
// console.log(computer);

// console.log(computer);

// ===================================== OPERATOR =========================
// Arithmetic Opertator

// let num = 54 + 35 - (20 * 3) / 2;
// console.log(num);

// let num2 = 3 ** 3;
// console.log(num2);

// let num3 = 10;
// // num2 += 1;
// num3++;
// console.log(num3);

// ======================== OPERATOR PRECEDENCE =================
// const yearWajid = 2003;
// const yearBilal = 2001;
// const currentYear = 2023;
// const age = currentYear - yearBilal < currentYear - yearWajid;
// console.log(age);

// ======================= STRINGS ================================
// Hi, I am Mohammad and I am living in Afghanistan,
// I am 21 years old, I love coding.

// const n = "Wajid";
// let country = "America";
// const currentYear = 2023;
// const birthYear = 2003;
// let hobby = "Swimming";

// const text = `I am ${n} and I am from ${country}, I am ${
//   currentYear - birthYear
// } and I love ${hobby}`;

// console.log(text);

// ================================ Type Conversion, Type Coercion ===================================

// const age = 18 + Number("30");
// console.log(age);

// const year = "20" + String(23);
// console.log(year);

// console.log(Number("Book"));
// console.log(typeof NaN);

// console.log(30 - "20");
// console.log(100 / "5");

// const number = 10 + "1";
// console.log(typeof number);
// console.log(number - 1);

// ================================ CODING CHALLENGE 1 =========================
/*
Omid and Jawid are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Omid's and Jawid's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'OmidHigherBMI' containing information about whether Omid has a higher BMI than Jawid.

TEST DATA 1: Omids weights 78 kg and is 1.69 m tall. Jawid weights 92 kg and is 1.95 m tall.
TEST DATA 2: Omids weights 95 kg and is 1.88 m tall. Jawid weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const omidMass = 78;
// const omidHeight = 1.69;
// const jawidMass = 92;
// const jawidHeight = 1.95;

// const BMIOmid = omidMass / omidHeight ** 2;
// const BMIJawid = jawidMass / jawidHeight ** 2;
// const OimdHeigherBMI = BMIOmid - BMIJawid;

// if (OimdHeigherBMI) {
//   console.log("omid has a higher BMI");
// } else {
//   console.log("omid doesnt have higher bmi");
// }

// ============================ if else =========================
// const firstName = "Sara";
// const birthYear = 2024;
// const currentYear = 2023;
// const person = currentYear - birthYear;

// const test = true;
// if (!test) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// ============================= Falsy Value ======================
/* Falsy Values are Five:
1. false
2. 0
3. null
4. ""
5. undefined

*/

// ============================ Boolean Logic ====================

/* 
1. true
2. false

and  
        true    false
          A       B
true  A true    false

false B false   false


or 
          true        false
            A           B
true   A  true        true
false  B  true        false

1. Diploma
2. Exprience
3. not old

*/

// const hasDiploma = false;
// const hasExprience = true;
// const isOld = false;

// if (hasDiploma || hasExprience || !isOld) {
//   console.log("You are hired!");
// } else console.log("You are not hired!");

// ====================== Switch Case Statement =================================
// We have just one
// const day = "یکشنبه";

// switch (day) {
//   case "Saturday":
//     console.log("I design websites");
//     break;
//   case "Sunday":
//     console.log("I work in garden");
//     console.log("I swim");
//     break;
//   case "Monday":
//     break;
//   case "Tuesday":
//     console.log("I go to picnic");
//     break;
//   case "Wednesday":
//     console.log("I work with JavaScript");
//     break;
//   case "Thursay":
//     break;
//   case "Friday":
//     console.log("Enjoy your Friday");
//     break;
//   default:
//     console.log("Enter a valid day");
// }

// ========================== Assignment operators ================
// let book = 10;

// book += 1;
// console.log(book);

// book -= 2;
// console.log(book);

// book *= 2;
// console.log(book);

// book %= 4;
// console.log(book);

// book **= 2;
// ---------------------------  == and ===  -----------------------------
// const age = "18";
// if (age == 18) {
//   console.log("You are now Adult");
// } else {
//   console.log("You are not 18");
// }

// =========================== statement and Expression ==========================
// expression
// console.log(10 + 12);

// 30 ** 10;
// const salary = 1000;

// // statement
// if (salary >= 1000) {
//   console.log(`You have more than ${salary} salary 😁`);
// }

// ========================= Ternery Operator ======================
// const age = 29;

// if (age >= 18) {
//   console.log("You can drive car");

// } else {
//   console.log("you can not drive car!!");
// }

// const driving = age >= 18 ? "you can drive car" : "you can not drive car";

// console.log(driving);

// ============================== Function ===========================
/* 
What is function?

        DRY 

        Juice     Machine 
                  input  
                  output 

*/

// // Declare
// function printer() {
//   console.log("This is a function");
//   console.log("This is a function");
//   console.log("This is a function");
//   console.log("This is a function");
//   console.log("This is a function");
//   console.log("This is a function");
//   console.log("This is a function");
// }

// // Envoke
// printer();
// printer();
// printer();

// Outline of a function syntax
// function nameOfFunction(parameter) {
//   // ...
//   return `this is something`;
// }

// nameOfFunction(argument);

// function juiceMachine(apple, orange) {
//   console.log(typeof apple);
//   if (typeof apple == "number" && typeof orange == "number") {
//     return `I am making ${apple} apples and ${orange} oranges juice`;
//   } else {
//     return `Please Enter a number`;
//   }
// }

// console.log(juiceMachine(2, 3));

// =========== Function declaration & Function Expression ==================

// // Function declaration
// const birthYear1 = 2020;
// getAge1(1999);

// function getAge1(birthYear) {
//   return 2023 - birthYear;
// }
// console.log(getAge1(birthYear1));

// // Function Expression
// const birthYear2 = 1900;
// const getAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// console.log(getAge2(birthYear2));
// getAge2(1995);

// ======================= Arrow Function =======================================

// const getAgeExpression = function (birthyear, deathyear) {
//   return `He lived ${deathyear - birthyear} years`;
// };

// const getAgeArrow = (birthyear, deathyear) => {
//   return `He lived ${deathyear - birthyear} years`;
// };
// console.log(getAgeExpression(2000, 2080));
// console.log(getAgeArrow(2000, 2080));

// ============= Calling Function into another function ==================
// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// function getInfo(firstName, lastName, yearofBirth) {
//   const age = calcAge(yearofBirth);
//   return `${firstName} ${lastName} is a student and he is ${age} years old`;
// }

// const information = getInfo("Ahmad", "Mohammadi", 1999);
// console.log(information);

// console.log(printJuiceMachine(2, 3));

// function getFruitPieces(fruitAmount) {
//   return fruitAmount * 4;
// }

// function printJuiceMachine(apple, orange) {
//   const applePieces = getFruitPieces(apple);
//   const orangePieces = getFruitPieces(orange);

//   return `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
// }

/// ================= Array =====================================
// const name = "wajid";
// const lastName = "Akhtari";
// const birthYear = "1970";

// const studentInformation = ["wajid", "Akhtari", 1970, true, null, false];
// console.log(studentInformation[2]);
// console.log(studentInformation[0]);

// studentInformation.pop();
// console.log(studentInformation);

// studentInformation.unshift(001);
// console.log(studentInformation);

// studentInformation.shift();
// console.log(studentInformation);

// studentInformation.push("Afghanistan");
// console.log(studentInformation);

// console.log(studentInformation.indexOf(1970));

// console.log(studentInformation[studentInformation.length - 1]);

// console.log(studentInformation.includes("kabul"));

/// ================================== Objects ===================

// const studentInformation = ["qasem", "mohammadi", 21, "Afghanistan"];
// const friends = ["Bilal", "wajid"];

// const studentInformationObject = {
//   firstName: "Qasem",
//   lastName: "Mohammadi",
//   age: 21,
//   country: "Afghanistan",
//   friends: ["Bilal", "Wajid"],
// };

// const name = "Name";

// console.log(studentInformationObject);
// // Dot Notation
// console.log(studentInformationObject.age);

// // Square Bracket
// console.log(studentInformationObject["first" + name]);

// const farid = {
//   firstName: "Farid",
//   lastName: "Atayee",
//   job: "Web Developer",
//   country: "Afghanistan",
//   birthYear: 1998,
//   getAge: function () {
//     return 2023 - this.birthYear;
//   },
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },;o
// };

// console.log(farid.getFullName());
// const userChoice = prompt(
//   `What do you want to know about Farshad?
//    choose between name, job, age and country.`
// );
// if (farshad[userChoice] === undefined) {
//   console.log("Choose between name, job, age and country.");
// } else {
//   console.log(farshad[userChoice]);
// }

// key value  (key:value)

// Loop حلقه

// console.log("You lited Power 1");
// console.log("You lifted Power 2");
// console.log("You lifted Power 3");
// console.log("You lifted Power 4");
// console.log("You lifted Power 5");
// console.log("You lifted Power 6");
// console.log("You lifted Power 7");
// console.log("You lifted Power 8");
// console.log("You lifted Power 9");
// console.log("You lifted Power 10");

// Two kinds of Loops
// 1. For loop
// 2. While

// for (let rep = 1; rep <= 10; rep++) {
//   // The code that we want them to repeat
//   console.log(`You lited the weights ${rep}`);
// }

// const mohammad = [
//   1,
//   "mohammad",
//   "bahmani",
//   38,
//   ["bilal", "wajid", "computer"],
//   true,
//   10,
// ];

// let type = [];
// for (let i = 0; i < mohammad.length; i++) {
//   // Reading from an array
//   if (typeof mohammad[i] === "boolean") continue;
//   console.log(mohammad[i]);
//   if (typeof mohammad[i] === "object") break;

// Writing into an array

// type += typeof mohammad[i];
// type.push(typeof mohammad[i]);
// }

// console.log(type);

// While Loop
// let i = 0;
// while (i < 10) {
//   console.log(`You lifted Weights ${i} `);
//   i++;
// }

// document.querySelector("h1");
// console.log(document.querySelector("h1"));
// console.log(document.querySelector(".paragraph"));

// DOM  Document Object Model

/* 
DOM: allow JS to select and manipulate to the HTML element. 

Web API (Application Programming Interface)
*/

// const title = document.querySelector("#title");
// const paragraph = document.querySelector(".paragraph");

// // paragraph.textContent = "I am learning JS";
// const textArea = document.querySelector(".text-area").value;
// console.log(textArea);

// const textInput = document.querySelector(".text-input").value;
// console.log(textInput);

// const ageInput = document.querySelector(".age-input").value;
// console.log(Number(ageInput) + 18);

// console.log(title);

// document.querySelector("body").style.backgroundColor = "#1098ad";

// document.querySelector("h1").style.fontFamily = "roboto";

// Event handler

// const changeBtn = document.querySelector(".change-btn");

// const getAge = function getAge() {};

// changeBtn.addEventListener("click", function () {
//   document.querySelector("body").style.backgroundColor = "#1098ed";
//   document.querySelector("#title").textContent =
//     "Background Color is changed!!!";
// });

// const restaurant = {
//   name: "Bukhara",
//   location: "PuleSurkh Square, Kabul",
//   categories: ["Afghani", "Soup", "Burger", "Vegetarian"],
//   starterMenu: ["Manto", "Ashak", "Soup", "Afghani Salad"],
//   mainMenu: ["Palaw", "Kebab", "Murgh Sigi"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return `Your order is ready:
//      ${this.starterMenu[starterIndex]}
//      and ${this.mainMenu[mainIndex]}`;
//   },
// };

// for (const day of Object.entries(restaurant.openingHours)) {
//   console.log(day);
// }

// const order = restaurant.order(1, 2);
// console.log(order);

// const {
//   name: resturantName,
//   mainMenu: primary,
//   openingHours: hours,
// } = restaurant;
// console.log(resturantName, primary, hours);

// const restaurant = [
//   "Bukhara",
//   "PuleSurkh Square, Kabul",
//   ["Afghani", "Soup", "Burger", "Vegetarian"],
//   ["Manto", "Ashak", "Soup", "Afghani Salad"],
//   ["Palaw", "Kebab", "Murgh Sigi"],
// ];

// Array   Object    Set   String
// const arr1 = restaurant[0];
// const arr2 = restaurant[1];
// const arr3 = restaurant[2];

// console.log(arr1, arr2, arr3);

// const [first, third] = restaurant;
// console.log(first, third);

// // nested array
// const arr1 = [1, 2, 3, [4, 5]];
// const [x, y, , [z1, z2]] = arr1;
// console.log(x, y, z1, z2);

//

// Spread Operator (bcz it is right side of equal )
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [9, 8, ...arr1];
// console.log(arr2);

// copying two array
// const first = ["desk", 29, "computer"];
// const second = ["history", "english", "web Development"];

// const third = [...first, ...second];
// console.log(third);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Rest Operator (bcz it is in left side of equal)
// const number = [10, 11, 12];
// const [x, y, ...arr] = [8383, 282, 2828, 37, 28, 9, 92, 29];
// console.log(...arr);

// Short Circuiting
// &&  ||

// falsy Value: 0 null false "" undefined

// ========== OR ============
// True

// console.log("============= OR ======================");
// let webDesign;
// console.log(null || false || "mohammad");
// console.log(webDesign || true);
// console.log(12 || webDesign || "salal" || "28383" || true);
// console.log(null || 0 || "" || false || 0 || "" || null);

// console.log("================= AND ====================");
// // False
// console.log(null && "jshs");
// console.log("Moral" && "Rich" && undefined && 0 && "");
// console.log("computer" && 1949 && true && [12, 83, "numbers"]);

// ==========================================================
// Looping arrays
// const students = ["mahmod", "Bilal", "mohamad", "Yasin"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }
// console.log("========================");
// for (let person of students) {
//   console.log(person);
// }

// const numbers = [1, 8, 19, 29, 38];
// for (let number of numbers) {
//   console.log(number + 10);
// }

// const rest = {
//   name: "Afghanistan Classic",
//   secondaryMenu: ["Ashak", "Manto"],
//   FistMenu: ["Palaw", "kebab", "Qabli"],
// };

// for (const info of Object.entries(rest)) {
//   console.log(info);
// }

// // Set
// // Unique
// const food = new Set([
//   "palaw",
//   "qabli",
//   "kebab",
//   "manto",
//   "drinks",
//   "palaw",
//   "qabli",
//   "qabli",
//   "qabli",
//   "qabli",
//   "qabli",
//   "qabli",
//   "qabli",
//   "qabli",
//   "qabl",
// ]);
// console.log(food);
// food.add("Murg Biryan");

// const personnel = new Set();
// personnel.add("Reception");
// personnel.add("manager");
// personnel.add("worker");
// console.log(personnel);
// console.log(personnel.size);
// personnel.delete("worker");
// console.log(personnel);
// console.log(personnel.has("boss"));
// personnel.clear();
// console.log(personnel);

// // Map
// const obj = { name: "mohammad", lastName: "Bahmani" };
// const restuarantMap = new Map();
// restuarantMap.set("name", "Classic");
// restuarantMap.set(1, "Karte3, Pule Surkh , Kabul");
// restuarantMap.set(2, "Zaiton Bruno , Istanbul");

// console.log(restuarantMap);

// console.log(restuarantMap.size);
// restuarantMap.delete(2);
// console.log(restuarantMap);
// const branch = restuarantMap.get(1);
// console.log(branch);
// // restuarantMap.clear();
// console.log(restuarantMap);
// console.log(restuarantMap.has("name"));

// // JSON

// OOP : Object Oriented programming
// Class: blueprint
// Instance (Object)

/*
// Four Core Concepts:
1. Abstraction: hide some parts of code 
2. Encapsulation:  
3. Inheritance:
4. PolyMorphism 

*/
/*
// // OOP in JavaScript 
// Class ---> Object
// 1. property 
// 2. method 

// prototype  <--- Object

// 1. Constructor Function 
// 2. ES6 Classes 
// 3. Object.create()

// */

// /*
// 1. Constructor
// 2. instance
// 3. method
// */

// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   // const getAge = function () {
// //   //   return 2023 - this.birthYear;
// //   // };
// // };

// // const person = new Person("mohammad", "1995");
// // const person1 = new Person("mahmod", "2009");
// // const person2 = new Person("wajid", "2022");
// // console.log(person);
// // console.log(person1);
// // console.log(person2);

// /*
// 1. {}
// 2. function called, this {}
// 3. {} --> prototype
// 4. {} returned

// */

// // console.log(person.birthYear);
// // console.log(person.__proto__ === Person.prototype);
// // console.log(person instanceof Person);
// // Person.prototype.calcAge = function () {
// //   console.log(2023 - this.birthYear);
// // };

// // console.log(Person.prototype.isPrototypeOf(person));
// // console.log(person.hasOwnProperty("birthYear"));

// // const person = class {

// // }

// class PersonCl {
//   constructor(firstName, BirthYear) {
//     this.firstName = firstName;
//     this.BirthYear = BirthYear;
//   }
//   calcAge() {
//     console.log(2023 - this.BirthYear);
//   }
// }

// const ahmad = new PersonCl("ahmad", 1996);
// console.log(ahmad);

// ahmad.calcAge();
// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

// ahmad.greet();

// const StudentProto = {
//   calcAge() {
//     console.log(2023 - this.BirthYear);
//   },
// };

// const steven = Object.create(StudentProto);
// console.log(steven);
// steven.firstName = "Steven";
// steven.BirthYear = 1990;
// steven.calcAge();
// console.log(steven.__proto__ === StudentProto);

/* 
constructor  prototype 

*/

// const Employee = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // const getAge = function () {
//   //   console.log(2023 - this.birthYear);
//   // };
// };

// const ahmad = new Employee("ahmad", 2000);
// console.log(ahmad);
// Employee.prototype.getAge = function () {
//   console.log(2023 - this.birthYear);
// };

// ahmad.getAge();
// console.log(ahmad);

// // console.log(ahmad.__proto__ === Employee.prototype);
// const bilal = new Employee("bilal", 1990);
// console.log(bilal);
// console.log(bilal.__proto__ === Employee.prototype);
//

/* 
Object  
__proto__
prototype: null

Constructor
__proto__
Object.prototype

Instance  
__proto__
Constructor.prototype   

*/

// ================ ES6 Classes ==================================

// Expression
// const emplyee = class{

// }

// Declaration
// class EmplyeeCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   getAge() {
//     console.log(2023 - this.birthYear);
//   }
// }

// const ahmadCl = new EmplyeeCl("ahmad", 2000);
// console.log(ahmadCl);

// const sarwary = new EmplyeeCl("Zekrya", 1990);
// sarwary.getAge();
// console.log(sarwary);

// const EmployeeProto = {
//   getAge() {
//     console.log(2023 - this.birthYear);
//   },
// };

// const wajid = Object.create(EmployeeProto);
// wajid.birthYear = 1995;
// wajid.firstName = "wajid";

// console.log(wajid);
// wajid.getAge();

//
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const rabia = new Student("rabia", 2004, "web design");
// rabia.introduce();
// console.log(rabia);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {}
// }

// class StudentCl extends PersonCl{
//   super (fullName, birthYear)

// }
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// const jay = Object.create(StudentProto);
// jay.init( )

// Inheritance
// Person ( Student, Teacher)

// 1. Constructor
// 2. Class
// 3. Object.create()

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.getAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const ahmad = new Person("ahmad", 2022);
// console.log(ahmad);
// ahmad.getAge();
// ahmad.getAge();

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`hey, I am ${this.firstName} and I am studying ${this.course}`);
// };
// const jawid = new Student("Jawid", 2001, "Web Design");
// jawid.introduce();
// jawid.getAge();
// console.log(jawid);

/* 
Prototype chain 
object
constuctor(person)
Student

*/

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   getAge() {
//     console.log(2023 - this.birthYear);
//   }
// }

// const mohammad = new PersonCl("mohammad", 1990);
// console.log(mohammad);

// class StudentCl extends PersonCl {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `Hi, I am ${this.firstName} and I am ${
//         2023 - this.birthYear
//       }years old and I am studying ${this.course}}`
//     );
//   }
// }

// const hamed = new StudentCl("Hamed", 1900, "computer");
// console.log(hamed);
// hamed.introduce();
// hamed.getAge();

const PersonProto = {
  getAge() {
    console.log(2023 - this.birthYear);
  },
  init(firsName, birthYear) {
    this.firstName = firsName;
    this.birthYear = birthYear;
  },
};

const ali = Object.create(PersonProto);
ali.firsName = "Ali";

console.log(ali);

let StudentProto = {
  introduce() {
    console.log(`hi I am ${this.firsName}`);
  },
};

StudentProto = Object.create(PersonProto);
const gul = Object.create(StudentProto);.
