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
