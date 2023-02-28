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

const age = 18 + Number("30");
console.log(age);

const year = "20" + String(23);
console.log(year);

console.log(Number("Book"));
console.log(typeof NaN);

console.log(30 - "20");
console.log(100 / "5");

const number = 10 + "1";
console.log(typeof number);
console.log(number - 1);
