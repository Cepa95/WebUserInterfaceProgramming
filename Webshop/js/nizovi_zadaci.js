// alert("Provjera");

//  zadatak1
// const arr = [10, 20, 30, 40, 50, 60, 70];
// arr.unshift(1);
// arr.push(100);
// const arrLength = arr.length-1
// arr.splice(arrLength, 0, 80); // na predzadnjoj poziciji, 0 elemenata obrisi, dodaj broj 80
// arr.splice(1,1); // na drugoj poziciji, jedan element obrisi
// arr.splice(arrLength,1);
// arr[1]=120;

// const sum = arr.reduce((total, currentValue) => {
//     return total + currentValue;
//   });

// let sum1 = 0;
// for (let i = 0; i < arr.length; i+=1){
//     sum1 += arr[i];
// }

// console.log(arr);
// console.log(sum);
// console.log(sum1);

// for (let i = 0; i < arr.length; i+=1){
//     console.log(arr[i]);
// }

// zadatak2
const webshop = [
  {
    naziv_proizvoda: "jabuka",
    godina_proizvodnje: 2023,
    cijena: 10.52,
    kolicina: 10,
    popust: 20,
  },
  {
    naziv_proizvoda: "kruska",
    godina_proizvodnje: 2023,
    cijena: 28.93,
    kolicina: 50,
    popust: 10,
  },
  {
    naziv_proizvoda: "jagoda",
    godina_proizvodnje: 2023,
    cijena: 45.98,
    kolicina: 25,
    popust: 15,
  },
  {
    naziv_proizvoda: "lubenica",
    godina_proizvodnje: 2023,
    cijena: 50.39,
    kolicina: 10,
    popust: 20,
  },
  {
    naziv_proizvoda: "malina",
    godina_proizvodnje: 2023,
    cijena: 21.49,
    kolicina: 10,
    popust: 10,
  },
  {
    naziv_proizvoda: "banana",
    godina_proizvodnje: 2023,
    cijena: 51.49,
    kolicina: 10,
    popust: 10,
  },
  {
    naziv_proizvoda: "mandarina",
    godina_proizvodnje: 2023,
    cijena: 45.98,
    kolicina: 25,
    popust: 15,
  },
  {
    naziv_proizvoda: "kiwi",
    godina_proizvodnje: 2023,
    cijena: 68.93,
    kolicina: 50,
    popust: 10,
  },
];

// const smallPrice = webshop
//   .filter((price) => {
//     return price.cijena < 50;
//   })
//   .map((price) => {
//     return price.naziv_proizvoda;
//   });

// // console.table(smallPrice);  //u obliku tablice, jer mi inace ispisuje [{…}, {…}, {…}, {…}, {…}] zbog kolicine podataka
// // for (let i = 0; i < smallPrice.length; i+=1){
// //     console.log(smallPrice[i]);
// // }
// console.log(smallPrice) //ako imam .map, onda ce ispisati samo naziv_proizvoda

// zadatak3
// const totalQuantity = webshop.reduce((sum, article) => {  // sum = 0 u pocetku, gdje smo je zadali, iterira i zbraja clan objekta kolicina
//   return sum + article.kolicina;
// }, 0);
// console.log(totalQuantity);

// zadatak4
// const allProducts = webshop.map((product) => {
//   return product.naziv_proizvoda;
// });
// console.log(allProducts);

// zadatak5
// const checkNumber = (num) => num >= 0 ? 1 : 0
// console.log(checkNumber(10))
// console.log(checkNumber(-10))

// const checkIsEven = (num) => num % 2 == 0 ? "Paran" : "Neparan"
// console.log(checkIsEven(10))
// console.log(checkIsEven(9))

// const cubeNum = (num) => { return num**3; }
// console.log(cubeNum(5))

// const helloWorld = () => { console.log("Hello World!"); }
// helloWorld();