// alert("Provjera");
// // zadatak1
// function delayedGreeting(greeting) {
//   return new Promise((resolve, reject) => {
//     if (typeof greeting === "string") {
//       setTimeout(() => {
//         resolve(console.log(greeting));
//       }, 5000);
//     } else {
//       reject(new Error("Not a string!"));
//     }
//   });
// }

// delayedGreeting("Pozdrav!")
//   .then(() => {
//     console.log("Pozdrav je isprintan nakon kasnjenja.");
//   })
//   .catch((error) => {
//     console.error(`Doslo je do greske: ${error}`);
//   });

// // zadatak2
// function checkWeather(city) {
//   return new Promise((resolve, reject) => {
//     const check = Math.random() * 100;
//     setTimeout(() => {
//       if (check > 50) {
//         resolve(`Vrijeme je sunčano u ${city}.`);
//       } else {
//         reject(new Error(`Vrijeme nije sunčano u ${city}.`));
//       }
//     }, 2000);
//   });
// }

// checkWeather("Split")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // zadatak3
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function example() {
//   console.log("Prije čekanja");
//   await delay(5000); // čeka 2 sekunde
//   console.log("Nakon čekanja");
// }

// example();

// // zadatak4
// function getData(callback) {
//   setTimeout(function () {
//     const data = { message: "Ovo su podaci" };
//     callback(data);
//   }, 4000);
// }
// function processData(data) {
//   console.log("Obrada podataka:", data.message);
// }
// getData(processData);
// console.log("Nastavak izvršavanja");

// // zadatak5

// function calculateSum(first, second) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(first + second), 2000)
//   );
// }

// async function calculateAndPrintSum(first, second) {
//   try {
//     if (typeof first === "number" && typeof second === "number") {
//       const sum = await calculateSum(first, second);
//       console.log(sum);
//     } else {
//       throw new Error("Both arguments must be numbers");
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// calculateAndPrintSum("ja", 3);

// // zadatak6
// function checkNumber(number) {
//   return new Promise((resolve) => {
//     if (number % 2 == 0) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// checkNumber(5)
//   .then(() => {
//     console.log("Broj je paran");
//   })
//   .catch(() => {
//     console.error("Broj je neparan");
//   });

// function add(first, second, callback) {
//   callback(first + second);
// }

// function print(sum) {
//   console.log(sum);
// }

// add(1, 5, print);
