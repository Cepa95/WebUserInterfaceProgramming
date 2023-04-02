// alert("Provjera");

// // zadatak1
// function ocjena(k1, k2, sem) {
//   //𝑂𝑐𝑗𝑒𝑛𝑎(%) = 0,42*kol1 + 0,42*kol2 + 0,16*semi
//   return k1 * 0.42 + k2 * 0.42 + sem * 0.16;
// }
// console.log(`Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`);

// const grade = (k1, k2, sem) => k1 * 0.42 + k2 * 0.42 + sem * 0.16; // bez {} mogu bez returna
// console.log(`Postotak ostvaren na kolegiju => ${grade(50, 80, 80)}`);

// function gradeCurry(k1) {
//   return function (k2) {
//     return function (sem) {
//       return k1 * 0.42 + k2 * 0.42 + sem * 0.16;
//     };
//   };
// }
// console.log(`Postotak ostvaren na kolegiju => ${gradeCurry(50)(80)(80)}`);

// // zadatak2
// const gradeSubject = (subject) => (points) => (total) => {
//   const percentage = ((points / total) * 100).toFixed(2);
//   console.log(`Iz kolegija ${subject} ostvarili ste ${percentage}%.`);
// };
// gradeSubject("PWKS")(25)(35);

// function gradeSub(subject) {
//   return function (points) {
//     return function (total) {
//       const percentage = ((points / total) * 100).toFixed(2); // na dvije decimale
//       console.log(`Iz kolegija ${subject} ostvarili ste ${percentage}%.`);
//     };
//   };
// }
// gradeSub("PWKS")(25)(35);

// zadatak3

// function mnozi(x) {
//   return function (y) {
//     if (y === undefined) {
//       return x;
//     }
//     const lastEven = y % 10;
//     if (lastEven % 2 === 0 && y != 0) {
//       return mnozi(x * y);
//     } else {
//       return mnozi(x);
//     }
//   };
// }
// console.log(mnozi(2)(5)(13)(10)(14)(177)(4)(0)());

// function mnozi(x) {
//   return function (y) {
//     if (y === undefined) {
//       return x;
//     }
//     let even = 0;
//     while (y != 0) {
//       let lastEven = y % 10;
//       if (lastEven % 2 == 0 && lastEven != 0) {
//         even = lastEven;
//         break;
//       }
//       y = parseInt(y / 10);
//     }
//     if (even !== 0 && y != 0) {
//       return mnozi((x + y) * even);
//     } else {
//       return mnozi(x);
//     }
//   };
// }
// console.log(mnozi(2)(5)(13)(10)(14)(177)(4)(0)());

// // zadatak4

// function Kolegij(godina, semestar, kol1, kol2, predmet){

//     this.year = godina;
//     this.term = semestar;
//     this.colloquim1 = kol1;
//     this.colloquim2 = kol2;
//     this.ocjena_rez = kol1*0.5 + kol2*0.5;
//     this.predmet = predmet;
//     this.ocjena = function () {
//         //  return (this.colloquim1*0.5 + this.colloquim2*0.5);
//         console.log(`Postotak riješenosti kolokvija: ${this.ocjena_rez}`);
//     }
//     // this.ocjena = () => {
//     //     console.log(`Postotak riješenosti kolokvija: ${this.ocjena_rez}`);
//     //   };
//     this.info = function () {
//         console.log(`Student na predmetu ${this.predmet}, ${this.year} godina, ${this.term} semestar, je ostvario ${this.ocjena_rez}%.`)

//     }

// }

// // const Kolegij1 = new Kolegij ('prva', 'drugi', 80, 80, 'PWKS')
// // Kolegij1.ocjena();
// // Kolegij1.info();

// const Kolegij2 = new Kolegij ('druga', 'treca', 70, 80, 'PWKS')
// Kolegij2.ocjena();
// Kolegij2.info();

// //zadatak5
// // zadatak6

// function Kolegij(godina, semestar, kol1, kol2, predmet){

//     this.year = godina;
//     this.term = semestar;
//     this.colloquim1 = kol1;
//     this.colloquim2 = kol2;
//     this.ocjena_rez = kol1*0.5 + kol2*0.5;
//     this.predmet = predmet;
//     this.ocjena = function () {
//         console.log(`Postotak riješenosti kolokvija: ${this.ocjena_rez}`);
//     }
//     this.info = function () {
//         console.log(`Student na predmetu ${this.predmet}, ${this.year} godina, ${this.term} semestar, je ostvario ${this.ocjena_rez}%.`)

//     }

// }
// const Kolegij2 = new Kolegij ('druga', 'treca', 70, 80, 'PWKS')
// Kolegij2.ocjena();
// Kolegij2.info();
// Kolegij2.ime = "Josip"
// Kolegij2.prezime = "Čeprnić"
// Kolegij2.status = "Izvanredni"
// // console.log(Kolegij2)
// console.log(`Student ${Kolegij2.ime} ${Kolegij2.prezime} ima ${Kolegij2.ocjena_rez}%.`)

// delete Kolegij2.prezime;
// delete Kolegij2.ime;
// delete Kolegij2.status;
// console.log(Kolegij2)
