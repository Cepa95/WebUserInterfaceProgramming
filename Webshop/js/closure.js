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


// // zadatak4
// function sum(a){
//     return (b, c) => {
//     return a * b * c
//     }
//     }
//     let x = sum(10);
//     console.log(x(3,12));
//     // ili
//     console.log(sum(10)(3,12));

// // zadatak5
// const multiplication = (num) => {
//     const pseudoRecursive = (number) => {
//         if ( number > 0 && number < 20) {
//             num *= number;
//             return pseudoRecursive; // nemaju () jer je to vise referenca na sebe u ovom slucaju, nego poziv => currying
//         }
//         if (number != undefined)
//         {
//             return pseudoRecursive; // u slucaju, da ima sta u zagradi, ali broj nije unutar trazenog
//         }
//         else { 
//             return num; // zavrsi rekurziju
//         }
//     }
//     return pseudoRecursive; // u slucaju da neman num, da mi vrati undefined umjesto errora
// }

// const sum = multiplication(1)(10)(2)(5)(100)(2)(); // prva zagrada mora biti jedan, a zadnja prazna => currying
// console.log(`Umnozak pozitivnih brojeva manjih od 20 iznosi: ${sum}`)


// zadatak5
// const multiplication = (num) => {
//     const pseudoRecursive = (number) => {
//         if ( number > 0 && number < 20) {
//             num *= number;
//             return pseudoRecursive; 
//         }
//         else if (number == undefined)
//         {
//             return num; 
//         }
//         return pseudoRecursive;
//     }
//     return pseudoRecursive; 
// }

// const sum = multiplication(1)(10)(2)(5)(100)(2)(); 
// console.log(`Umnozak pozitivnih brojeva manjih od 20 iznosi: ${sum}`)
