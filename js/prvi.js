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

function greater(){
    const number = parseInt(prompt('Unesite neki broj: '));
    return number > 100 ? 'veci od 100' : 'manji od 10';
}


greet();
console.log(isPrime());
console.log(greater()); 