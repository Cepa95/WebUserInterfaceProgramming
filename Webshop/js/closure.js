// alert("Provjera");

// //zadatak1
// function sortElements() {
//   const array = [];
//   for (let i = 0; i < 10; i++) {
//     array[i] = Math.floor(Math.random() * 100) + 100;
//   }
//   // console.log(array)
//   array.sort(function (a, b) {
//     return a - b;
//   }); // u slucaju da su brojevi jednaki stringovima
//   return array;
// }
// console.log(`Sortirani elementi niza su: ${sortElements()}`); //AltGr + 7

// //zadatak2
// function sumNumbers() {
//   let sumEven = 0;
//   let sumOdd = 0;
//   sumAll = (num) => {
//     if (num % 2 == 0) {
//       sumEven += num;
//     } else {
//       sumOdd += num;
//     }
//   };
//   while (true) {
//     let num = parseInt(prompt("Unesite prirodni broj: "));
//     if (num == 0) {
//       break;
//     }
//     if (Number.isInteger(num)) {
//       sumAll(num);
//     }
//   }
//   return { sumEven, sumOdd }; // tribaju zagrade, inace undefined
// }

// const calculation = sumNumbers();
// console.log(
//   `Suma parnih: ${calculation.sumEven}, Suma neparnih: ${calculation.sumOdd}`
// );

// // zadatak3
// function closure() {
//   print = () => "Programirati nije tesko";
//   return print();
// }
// console.log(`Ispis closure funkcije: ${closure()}`);
