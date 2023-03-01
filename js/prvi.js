function greet(){
    console.log('Hello World!')
}

function isPrime(){

const number = parseInt(prompt('Unesite neki broj, za koji zelite provjerit jeli prost: '));
if (Number.isInteger(number)){
    for (let i = 2; i < number; i++){
         if (number % i == 0)
            return false;
    }
    return true;
}
return null;
}


greet();
console.log(isPrime());