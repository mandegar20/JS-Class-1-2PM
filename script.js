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

const hasDiploma = false;
const hasExprience = true;
const isOld = false;

if (hasDiploma || hasExprience || !isOld) {
  console.log("You are hired!");
} else console.log("You are not hired!");
