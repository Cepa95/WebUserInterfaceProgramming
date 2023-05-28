// alert("Provjera");

// zadatak 1
// function Bank(iznos){
//     this.iznos = iznos
// }
// Bank.prototype.getBalance = function(){
//     return this.iznos
// }
// Bank.prototype.deposit = function(uplata){
//     return this.iznos += uplata
// }

// Bank.prototype.withdraw = function(isplata){
//     if(this.iznos >= isplata)
//         this.iznos -= isplata
//     else
//         console.log("insufficient amount on the account")
// }

// const bank = new Bank(500)
// console.log(`Stanje racuna je ${bank.getBalance()}`)
// console.log(`Stanje racuna nakon uplate je ${bank.deposit(200)}`)

// function Interest(iznos, kamate){
//     Bank.call(this, iznos)
//     this.kamate = kamate
// }
// Interest.prototype = Object.create(Bank.prototype)
// Interest.prototype.constructor = Bank

// Interest.prototype.getInterest = function(kamata){
//    this.iznos += this.iznos * (kamata / 100)
//    return this.iznos
// }

// const k = new Interest(100, 2.5)
// console.log(`Stanje računa je ${k.getBalance()}`);
// console.log(`Stanje s kamatom je ${k.getInterest(2.5)}`);

// S klasama
// class Bank {
//   constructor(iznos) {
//     this.iznos = iznos;
//   }
// }

// Bank.prototype.getBalance = function () {
//   return this.iznos;
// };

// Bank.prototype.deposit = function (uplata) {
//   return (this.iznos += uplata);
// };

// Bank.prototype.withdraw = function (isplata) {
//   if (this.iznos >= isplata) {
//     this.iznos -= isplata;
//   } else {
//     console.log("Nedovoljan iznos na računu");
//   }
// };

// class Interest extends Bank {
//   constructor(iznos, kamate) {
//     super(iznos);
//     this.kamate = kamate;
//   }
// }

// Interest.prototype.getInterest = function (kamata) {
//   this.iznos += this.iznos * (kamata / 100);
//   return this.iznos;
// };

// const bank = new Bank(500);
// console.log(`Stanje računa je ${bank.getBalance()}`);
// console.log(`Stanje računa nakon uplate je ${bank.deposit(200)}`);
// console.log(`Stanje računa nakon isplate je ${bank.withdraw(100)}`);

// const k = new Interest(100, 2.5);
// console.log(`Stanje računa je ${k.getBalance()}`);
// console.log(`Stanje s kamatom je ${k.getInterest(2.5)}`);

//zadatak 2
// function changeBackgroundColor() {
//   document.body.style.backgroundColor = "red";
// }

// const p = document.getElementsByTagName("p");
// for (i = 0; i < p.length; i++) {
//   p[i].style.fontSize = "12px";
// }

//zadatak 3
// function trianglePerimeter(first, second, third) {
//   return new Promise(function (resolve, reject) {
//     if (typeof first == "number" && typeof second == "number" && typeof third == "number") {
//       resolve(first + second + third);
//     } else {
//       reject("Error");
//     }
//   });
// }

// trianglePerimeter(10, 5, 10)
//   .then(function (perimeter) {
//     console.log(perimeter);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function trianglePerimeter(first, second, third) {
//   return new Promise(function (resolve, reject) {
//     if (typeof first === "number" && typeof second === "number" && typeof third === "number") {
//       const sum = first + second + third;
//       resolve(sum);
//     } else {
//       reject("Error");
//     }
//   });
// }

// trianglePerimeter(12, 3, "b").then(console.log).catch(console.log);

// function Building(name) {
//   this.name = name;
// }

// Building.prototype.numberOfApartments = function (number) {
//   console.log(`In the building ${this.name} there is ${number} apartments`);
// };

// function Parking(name, spaces) {
//   Building.call(this, name);
//   this.spaces = spaces;
// }

// Parking.prototype = Object.create(Building.prototype);
// Parking.prototype.constructor = Building;

// Parking.prototype.numberOfSpaces = function (number) {
//   console.log(`there is ${number} ${this.spaces} parking spaces`);
// };

// const building = new Parking("Zgrada", "big");
// console.log(building.name);
// console.log(building.spaces);
// building.numberOfApartments(10);
// building.numberOfSpaces(20);



// function checkNumber(number) {

//   return new Promise((resolve,reject)=> {
//     if (number % 2 == 0)
//     {
//         resolve(3);
//     }
//     else{
//         reject(4);
//     }
//   })
// }

// checkNumber(11).then(console.log).catch(console.log);


// function multiply(a,b, callback){

//     return callback(a,b)
// }

// function sum(a,b){

//     return a*b;
// }

// console.log(multiply(10,3,sum))


// function waitTime() {
//     return new Promise((resolve) => {
//       setTimeout(function() {
//         console.log("Time");
//         resolve();
//       }, 5000);
//     });
//   }
  
  
// async function checkNumber(number) {

//     console.log(number)
//     await waitTime();
//     console.log('done')
// }

// checkNumber(10)




