// // alert("Provjera");

// // zadatak1
// // function Automobil(brand, model, year, speed) {
// //   this.brand = brand;
// //   this.model = model;
// //   this.year = year;
// //   this.speed = speed;
// // }
// // // Automobil.prototype.dodajBrzinu = function (speed) {
// // //   this.speed += speed;
// // // };
// // // Automobil.prototype.prikaziBrzinu = function () {
// // //   console.log(this.speed);
// // // };
// // const mojAutomobil = new Automobil("Toyota", "Cambri", 2015, 60);
// // console.log(mojAutomobil);

// // Automobil.prototype.dodajBrzinu = function (speed) {
// //   this.speed += speed;
// // };
// // Automobil.prototype.prikaziBrzinu = function () {
// //   console.log(`Trenutna brzina je ${this.speed} km/h`);
// // };
// // console.log(mojAutomobil);
// // mojAutomobil.dodajBrzinu(20);
// // mojAutomobil.prikaziBrzinu();

// //zadatak2
// // function Vechicle(brand, year) {
// //   this.brand = brand;
// //   this.year = year;
// //   this.drive = function () {
// //     console.log(`Vozim ${this.brand} vozilo godiste ${this.year}`);
// //   };
// // }
// // // const vehicle = new Vechicle("Toyota", 2000)
// // // vehicle.drive()

// // function Auto(brand, year, color, door) {
// //   Vechicle.call(this, brand, year);
// //   this.color = color;
// //   this.door = door;
// //   this.park = function () {
// //     console.log(`Automobil ${this.brand}, ${this.color} boje je parkiran`);
// //   };
// // }

// // Auto.prototype = Object.create(Vechicle.prototype);
// // Auto.prototype.constructor = Auto;

// // // const automobil = new Auto("Fiat", "Punto", "plave", 1995);
// // // automobil.park();

// // function Motorcycle(brand, year, type) {
// //   Auto.call(this, brand, year);
// //   this.type = type;
// //   this.driveFast = function () {
// //     console.log(
// //       `Vozim motocikl tipa ${this.type}, marked ${this.brand} i godiste ${this.year} brzo!`
// //     );
// //   };
// // }
// // Motorcycle.prototype = Object.create(Auto.prototype);
// // Motorcycle.prototype.constructor = Motorcycle;

// // let auto = new Auto("BMW", 2022, "crna", 5);
// // auto.drive(); // Vozim marku vozila BMW godište 2022
// // auto.park(); // Automobil BMW, crna boje je parkiran!
// // // Kreiranje instance objekta Motocikl
// // let moto = new Motorcycle("Honda", 2020, "sportski");
// // moto.drive(); // Vozim marku vozila Honda godište 2020
// // moto.driveFast(); // Vozim motocikl tipa sportski, marke Honda i godište 2020 brzo!

// //zadatak3

// class Employee {
//   constructor(firstName, lastName, email, grade = -1) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.grade = grade;
//   }
//   employee() {
//     console.log(`${this.firstName} ${this.lastName} ${this.email}`);
//   }
//   employeeGrade(grade) {
//     this.grade = grade;
//   }
// }
// // const emp = new Employee("john", "Doe", "nesto@gmail.com");
// // emp.employee();

// class Programer extends Employee {
//   constructor(firstName, lastName, email, language) {
//     super(firstName, lastName, email);
//     this.language = language;
//   }
//   employee() {
//     console.log(
//       `${this.firstName} ${this.lastName}, email: ${this.email}, programski jezik: ${this.language}`
//     );
//   }
// }

// class Designer extends Programer {
//   constructor(firstName, lastName, email, software) {
//     super(firstName, lastName, email);
//     this.software = software;
//   }
//   employee() {
//     console.log(
//       `${this.firstName} ${this.lastName}, email: ${this.email}, softver: ${this.software}`
//     );
//   }
// }

// // Kreiranje instance za klasu "Zaposlenik"
// const zaposlenik1 = new Employee("Pero", "Perić", "pero.peric@example.com", 4);
// zaposlenik1.employee(); // Ispisuje "Pero Perić, email: pero.peric@example.com"
// zaposlenik1.employeeGrade(4);
// // Kreiranje instance za klasu "Programer"
// const programer1 = new Programer(
//   "Marko",
//   "Markić",
//   "marko.markic@example.com",
//   "JavaScript"
// );
// programer1.employee(); // Ispisuje "Marko Markić, email: marko.markic@example.com, programski jezik: JavaScript"
// // Kreiranje instance za klasu "Dizajner"
// const dizajner1 = new Designer(
//   "Ana",
//   "Anić",
//   "ana.anic@example.com",
//   "Adobe Photoshop"
// );
// dizajner1.employee(); // Ispisuje "Ana Anić, email: ana.anic@example.com, softver: AdobePhotoshop
