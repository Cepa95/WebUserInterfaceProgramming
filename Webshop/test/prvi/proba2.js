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

// 4 zadatak
// class Osoba {
//   #ime;
//   #prezime;
//   #god_rod;
//   constructor(ime, prezime, god_rod) {
//     this.#ime = ime;
//     this.#prezime = prezime;
//     this.#god_rod = god_rod;
//   }
//   greet() {
//     console.log(`Pozdrav ${this.#ime} ${this.#prezime}`);
//   }
//   get ime() {
//     return this.#ime;
//   }
//   get prezime() {
//     return this.#prezime;
//   }
//   get god_rod() {
//     return this.#god_rod;
//   }
//   set ime(ime) {
//     this.#ime = ime;
//   }
//   set prezime(prezime) {
//     this.#prezime = prezime;
//   }
//   set god_rod(god_rod) {
//     this.#god_rod = god_rod;
//   }
// }

// const osoba1 = new Osoba("John", "Doe", 1990);
// const osoba2 = new Osoba("Paul", "Smith", 2000);
// osoba1.greet()
// osoba2.greet()

// 5 zadatak
// function isOnlyLetters(str){
//     const regex = /^[a-zA-Z]+$/
//     return str.match(regex)  ? true : false
// }
// console.log(isOnlyLetters("Hello"));
// console.log(isOnlyLetters("Hello123"));
   