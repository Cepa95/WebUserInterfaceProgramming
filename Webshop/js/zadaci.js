// alert("Moj prvi JS program");
// console.log("Moj prvi JS program");


//1
// function arithmetic_middle() {
//   const first = parseInt(prompt("Unesite prvi broj: "));
//   const second = parseInt(prompt("Unesite drugi broj: "));
//   const third = parseInt(prompt("Unesite treci broj: "));
//   if (
//     !Number.isInteger(first) ||
//     !Number.isInteger(second) ||
//     !Number.isInteger(third)
//   ) {
//     console.log("Krivo unešeni podaci");
//     return;
//   }
//   const average = (first + second + third) / 3;
//   console.log("Aritmetička sredina:" + average);
// }

//2
// function math_operations(first, second, operation) {
//   let solution;
//   let check = "+-*/";
//   if (isNaN(first) || isNaN(second) || !check.includes(operation)) {
//     console.log("Pogrešan unos broja ili operacije!");
//     return;
//   } else if (operation === "+") {
//     solution = first + second;
//   } else if (operation === "-") {
//     solution = first - second;
//   } else if (operation === "*") {
//     solution = first * second;
//   } else {
//     solution = first / second;
//   }
//   console.log(solution);
// }

//3
// function first_digit(first) {
//   while (first >= 10) {
//     first /= 10;
//   }
//   return parseInt(first);
// }

//4
// function season(month) {
//   if (!Number.isInteger(month)) {
//     alert("nije unesen integer");
//   } else if (month >= 1 && month <= 3) {
//     alert("Zima");
//   } else if (month >= 4 && month <= 6) {
//     alert("Proljeće");
//   } else if (month >= 7 && month <= 9) {
//     alert("Ljeto");
//   } else if (month >= 10 && month <= 12) {
//     alert("Jesen");
//   } else {
//     alert("Krivo unešeni podaci");
//   }
// }

//5
// function count_Z(number, Z) {
//     let counter = 0;
//     let rest;
//     while (number != 0) {
//       rest = number % 10;
//       if (rest === Z) {
//         counter += 1;
//       }
//       number = parseInt(number / 10);
//     }
//     return counter;
//   }
  

//1
// //arithmetic_middle();
//2
// const first = parseFloat(prompt("Unesite prvi broj: "));
// const second = parseFloat(prompt("Unesite drugi broj: "));
// let operation = prompt("Unesite operaciju: ");
// math_operations(first, second, operation);
//3
// const first = parseInt(prompt("Unesite broj: "));
// console.log(first_digit(first));
//4
// const month = parseInt(prompt("Unesite mjesec putem brojevnog zapisa"));
// season(month);
//5
// let number = 2955;
// let Z = 5;
// alert(
//   "U broju " +
//     number +
//     " imamo " +
//     count_Z(number, Z) +
//     " pojavljivanja broja" +
//     Z
// );
