// alert("Provjera");

class Auto {
  #brand;
  #model;
  #color;
  #price;
  #defaultVariable = "default";
  constructor(brand, model, color, price) {
    this.#brand = brand;
    this.#model = model;
    this.#color = color;
    this.#price = price;
    // this.#defaultVariable = "default";

    // Object.defineProperty(this, 'brand', {  //Object.defineProperty ide u constructor
    //     get: function(){
    //         return this.#brand
    //     },
    //     set: function(brand){
    //         this.#brand = brand
    //     }
    // })
  }
  get getBrand2() {return this.#brand}
  getBrand = () => this.#brand; // jedna linija ne tribaju viticaste
  getModel = () => this.#model;
  getColor = () => this.#color;
  getPrice = () => this.#price;
  getDefault = () => this.#defaultVariable;

  /**
   * @param {string} brand
   */
  set setBrand2(brand) {this.#brand = brand}
  setBrand = (brand) => (this.#brand = brand); // jedna linija ne tribaju viticaste
  setModel = (model) => (this.#model = model);
  setColor = (color) => (this.#color = color);
  setPrice = (price) => (this.#price = price);
  setDefault = (defaultVariable) => (this.#defaultVariable = defaultVariable);

  //   #priceWithVAT() {
  //     return this.#price * 1.25;
  //   }
  #priceWithVAT = () => this.#price * 1.25;
  getPriceWithVAT = () => {
    return this.#priceWithVAT();
  }; // return u viticastim

  //   autoData() {
  //     return {
  //       brand: this.#brand,
  //       model: this.#model,
  //       color: this.#color,
  //       price: this.#price,
  //     };
  //   } //jedan od nacina za dohvacanje vrijednosti objekta stvaranjem objekta s vise svojstava
}

const firstCar = new Auto("BMW", "XM", "blue", 20000);
// console.log(`Cijena s PDV-om iznosi: ${firstCar.getPriceWithVAT()} eura.`);
// console.log(firstCar.getBrand())
// console.log(firstCar.getPrice(123))
// firstCar.setBrand("PEUGEOT")
// console.log(firstCar.getBrand())
// console.log(firstCar.autoData().brand)

// const { brand, model, color, price } = firstCar.autoData();
// console.log(brand, model, color, price);

// console.log(firstCar.getDefault())

const secondCar = new Auto("Audi", "A1", "white", 15000);

// console.log(firstCar.brand) // sa Object.defineProperty jedan od nacina za get i set
// firstCar.brand = "FIAT"
// console.log(firstCar.brand)

function AutoFactory(brand, model, color, price) {
    let defaultVariable = "default";
  
    function priceWithVAT() {
      return price * 1.25;
    }
  
    return {
      getBrand: () => brand,
      getModel: () => model,
      getColor: () => color,
      getPrice: () => price,
      getDefault: () => defaultVariable,
  
      setBrand: (newBrand) => (brand = newBrand),
      setModel: (newModel) => (model = newModel),
      setColor: (newColor) => (color = newColor),
      setPrice: (newPrice) => (price = newPrice),
      setDefault: (newDefault) => (defaultVariable = newDefault),
  
      getPriceWithVAT: () => priceWithVAT(),
    //   getPriceWithVAT: function() {
    //     return priceWithVAT();
    //   },
  
      autoData: () => ({
        brand,
        model,
        color,
        price,
      })
    };
  }
  
  const thirdCar = AutoFactory("Toyota", "Corolla", "red", 10000);
  console.log(thirdCar.getBrand()); 
  console.log(thirdCar.getPrice()); 
  thirdCar.setBrand("Honda");
  console.log(thirdCar.getBrand()); 
  console.log(thirdCar.autoData()); 
  console.log(thirdCar.getPriceWithVAT());
  
  firstCar.setBrand2 = "Ford"
  console.log(firstCar.getBrand2)
