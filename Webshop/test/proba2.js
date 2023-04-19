// alert("provjera")

// 2 zadatak

// function addN(number) {
//   return function (a) {
//     return number + a;
//   };
// }
// const add = addN(3);
// console.log(add(5));

// 3 zadatak
// function sum(x) {
//   if (x < 10) {
//     x = 0;
//   }
//   return function (y) {
//     if (y === undefined) {
//       return x;
//     }
//     if (y > 10) {
//       return sum(x + y);
//     } 
//     else {
//       return sum(x);
//     }
//   };
// }
// console.log(sum(1)(2)(20)(35)(4)(7)())
// console.log(sum(1)(2)(2)(3)(4)(7)())