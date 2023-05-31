// alert('provjera')

// 1 zadatak

class Osoba{
    constructor(ime,prezime,datumRodenja,spol){
        this.ime = ime;
        this.prezime = prezime;
        this.datumRodenja = datumRodenja;
        this.spol = spol
    }
}

Osoba.prototype.predstaviSe = function(){
    console.log(`ja se zovem ${this.ime} ${this.prezime}, roden sam ${this.datumRodenja} i ${this.spol} sam`)
}

// const osoba = new Osoba('Josip', 'Ceprnic', 1995, 'musko')
// osoba.predstaviSe()

class Ucenik extends Osoba{
    constructor(ime,prezime,datumRodenja,spol, razred, ocjene){
        super(ime,prezime,datumRodenja,spol)
        this.razred = razred
        this.ocjene = ocjene
    }
}

Ucenik.prototype.izracunProsjeka = function(){
    
    sum=0;
    for (let i=0; i< this.ocjene.length; i++)
    {
    sum+= this.ocjene[i]
    }
    sum /= this.ocjene.length
    console.log(sum)
}


const ucenik = new Ucenik('Josip', 'Ceprnic', 1995, 'musko', 7, [5,4,3,4,5,3])
console.log(ucenik)
ucenik.izracunProsjeka()

class Nastavnik extends Osoba{
    constructor(ime,prezime,datumRodenja,spol, predmet, radnoMjesto){
        super(ime,prezime,datumRodenja,spol)
        this.predmet = predmet;
        this.radnoMjesto = radnoMjesto;
    }
}

Osoba.prototype.nastava = function(){
    console.log(`ja se zovem ${this.ime} ${this.prezime}, roden sam ${this.datumRodenja}, ${this.spol} sam predajem ${this.predmet} i radim u ${this.radnoMjesto}`)
}

const nastavnik = new Nastavnik('Josip', 'Ceprnic', 1995, 'musko', 'Povijest', 'OS')
nastavnik.nastava()

// 2 zadatak
function divMain(){
    const listp = document.getElementsByTagName('p')
    listp[1].innerHTML = 'PROMJENA'
}


function add(){
    const li= document.createElement('li');
    li.innerHTML = 'dodano';
    document.getElementById('lista').appendChild(li)
}

// 3 zadatak
function checkLength(str, len){
    return new Promise((resolve,reject) => {
        if (str.length >= len){
            resolve('string je veci od broja znakova')
        }
        else {
            reject('string je manji')
        }
    })
}

checkLength('jabuka', 10).then(console.log).catch(console.log)
