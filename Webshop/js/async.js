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
//         reject(`Vrijeme nije sunčano u ${city}.`);
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
