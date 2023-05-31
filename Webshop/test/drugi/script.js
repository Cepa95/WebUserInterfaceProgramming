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

// function hello(broj){
//     return new Promise((resolve, reject) =>{

//         if (typeof broje === 'number' ){
//             resolve(broj)
//         }
//         else{
//             reject(broj)
//         }
//     } )
// }

// // hello('jabuka').then(console.log).catch(console.log)
// // hello('jabuka').then((broj)=> {console.log(broj)}).catch((broj) => {console.log(broj)})

// function changeBackgroundColor() {
//     const p = document.getElementsByTagName('p');
//     for (let i = 0; i < p.length; i++) {
//         p[i].style.backgroundColor = 'blue';
//     }
// }

// function Vozilo(marka, godinaProizvodnje){
//     this.marka = marka;
//     this.godinaProizvodnje = godinaProizvodnje;
// }

// Vozilo.prototype.vozi = function() {
//     console.log(`Vozim ${this.marka} vozilo godiste ${this.godinaProizvodnje}`);
// }

// const vozilo = new Vozilo('Toyota',1995);
// vozilo.vozi()

// function Automobil(marka, godinaProizvodnje, boja, brojVrata){
//     Vozilo.call(this, marka, godinaProizvodnje);
//     this.boja = boja;
//     this.brojVrata = this.brojVrata;
// }

// Automobil.prototype = Object.create(Vozilo.prototype)
// Automobil.prototype.constructor = Vozilo

// Automobil.prototype.parkiraj = function(){
//     console.log(`Automobil ${this.marka} ${this.boja} boje je parkiran`)
// }

// const auto = new Automobil('Fiat', 1990, 'plava', 10)
// auto.vozi()
// auto.parkiraj()

// class Vozilo{

//     constructor(marka, godinaProizvodnje){
//         this.marka = marka;
//         this.godinaProizvodnje = godinaProizvodnje
//     }
// }

// Vozilo.prototype.vozi = function() {
//     console.log(`Vozim ${this.marka} vozilo godiste ${this.godinaProizvodnje}`);
// }

// // const vozilo = new Vozilo('Toyota',1995);
// // vozilo.vozi()

// class Automobil extends Vozilo{
//     constructor(marka, godinaProizvodnje, boja, brojVrata){
//         super(marka, godinaProizvodnje);
//         this.boja = boja;
//         this.brojVrata = brojVrata
//     }
// }

// Automobil.prototype.parkiraj = function(){
//     console.log(`Automobil ${this.marka} ${this.boja} boje je parkiran`)
// }

// const auto = new Automobil('Fiat', 1990, 'plava', 10)
// auto.vozi()
// auto.parkiraj()

function changeSomething() {
  // document.getElementById('paragraf').style.backgroundColor ='blue'
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(function (paragraph) {
    paragraph.style.backgroundColor = "green";
  });
}

document.querySelector("input[type=number]").stepDown(5);

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0 && typeof number === "number") {
      resolve(number);
    } else reject("Broj je neparan ili je krivo unesen podatak");
  });
}

// checkNumber(11).then(console.log).catch(console.log)
// checkNumber(11).then( (number) => console.log(number)).catch(console.log)

// function change(){
//   document.getElementById('paragraf').innerHTML = 'Promjena'
// }

function delayed(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number >= 50) {
        resolve(number);
      } else {
        reject(number);
      }
    }, 2000);
  });
}

delayed(59).then(console.log).catch(console.log);

document.getElementById("paragraf").style.textAlign = "center";

function changeList() {
  let ul = document.getElementById("lista");
  let ol = document.createElement("ol");
  ol.innerHTML = ul.innerHTML;
  ul.parentNode.replaceChild(ol, ul);
}
const li = document.createElement("li");
li.innerHTML = "dodavanje teksta";
document.getElementById("lista").appendChild(li);

function deleteList() {
  const list = document.getElementById("lista");
  const lastListItem = list.lastElementChild;
  list.removeChild(lastListItem);
}

function replace() {
  const para = document.createElement("p");
  const node = document.createTextNode("Promjena 5");
  para.appendChild(node);
  const parent = document.getElementById("replace").parentNode;
  parent.replaceChild(para, document.getElementById("replace"));
}

// class State{
//   constructor(state) {
//     this.state = state;
//   }
// }

// State.prototype.consoleState = function(){
//   console.log(`Drzava je ${this.state}`)
// }

// const state = new State('Hrvatska')
// state.consoleState()

// class Continent extends State{
//   constructor(state, continent)
//   {
//     super(state)
//     this.continent = continent
//   }
// }

// Continent.prototype.consoleContinent = function(){
//   console.log(`Drzava je ${this.state}, kontinent je: ${this.continent}`)
// }
// const continent = new Continent('Austrija', 'Europa')
// continent.consoleContinent()
// continent.consoleState()

// class City extends Continent{
//   constructor(state, continent, city){
//     super(state, continent)
//     this.city = city
//   }
// }

// City.prototype.consoleCity = function(){
//   console.log(`Drzava je ${this.state}, kontinent je: ${this.continent}, grad je ${this.city}`)
// }

// const city = new City('Madarska', 'Europa', 'Budimpesta')
// city.consoleCity()
// city.consoleState()

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
async function fun() {
  console.log("Hello World");
  await sleep(2000);
  console.log("pozdrav");
}
fun();
