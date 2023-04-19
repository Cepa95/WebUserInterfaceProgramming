// alert("Provjera");

// 2 zadatak

// function increment(number) {
//   return () => {
//     number++;
//     console.log(number);
//   };
// }

// let inc = increment(10);
// inc();
// inc();
// inc();

// 3 zadatak

// function add(a,b){
//     return function(c){
//         return a+b+c;
//     }
// }
// console.log(add(10,10)(5));

// 4 zadatak

// class BankAccount{
//     #firstName
//     #lastName
//     #balance
//     constructor(firstName, lastName, balance){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#balance = balance;
//     }
//     get firstName(){
//         return this.#firstName;
//     }
//     get lastName(){
//         return this.#lastName;
//     }
//     get balance(){
//         return this.#balance;
//     }
//     set firstName(firstname){
//         this.#firstName = firstname;
//     }
//     set lastName(lastname){
//         this.#lastName = lastname;
//     }
//     set balance(balance){
//         this.#balance = balance;
//     }
//     payment(money){
//         this.#balance += money;
//     }
//     payout(money){
//         this.#balance -= money;
//     }

// }

// const bankAccount = new BankAccount("John", "Doe", 1000);
// console.log(bankAccount.firstName)
// bankAccount.firstName = "Paul"
// console.log(bankAccount.firstName)
// bankAccount.payment(500)
// console.log(bankAccount.balance)
// bankAccount.payout(700)
// console.log(bankAccount.balance)

// 5 zadatak
// function check(str){
//     // const regex = /^\d{1,}$/
//     const regex = /^[0-9]+$/
//     return str.match(regex)  ? true : false
// }
// console.log(check("123456"));
// console.log(check("1a2b3c"));
   