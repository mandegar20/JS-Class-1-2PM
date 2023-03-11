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

const changeBtn = document.querySelector(".change-btn");

const getAge = function getAge() {};

changeBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#1098ed";
  document.querySelector("#title").textContent =
    "Background Color is changed!!!";
});
