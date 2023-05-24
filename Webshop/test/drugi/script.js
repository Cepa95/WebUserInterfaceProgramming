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
