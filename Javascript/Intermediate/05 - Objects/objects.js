
  //Prototype of a car. Each car object has these variables and functions.
  function Car(licenseNumber, maker, model, color, price) {
      this.licensePlate = licenseNumber; //this refers to the object that "owns" the current code
      this.manufacturer = maker;         //For example, when object called fiat calls the functions here,
      this.model = model;               //it gets different result than when an object called tesla calls these functions.
      this.paint = color;
      this.price = price;
      this.ignition = false;

      this.start = function () {
          console.log("Vroom Vroom! " + this.getname() + " is ready to go!");
          this.ignition = true;
      }

      this.stop = function(){
          console.log("Screech! " + this.getname() + " is stopped.");
          this.ignition = false;
      }

      this.drive = function(){
        if(this.ignition) console.log(this.getname() + " is driving");
        else console.log(this.getname() + " is not started yet!");
      }

      this.getname = function(){
        return this.manufacturer + " " + this.model;
      }
  }


//Gets the user input and creates a new car object based on those properties
  function createNewCar(){

    var licensePlate = document.getElementById('license-plate').value;
    var manufacturer = document.getElementById('manufacturer').value;
    var model = document.getElementById('model').value;
	  var price = parseInt(document.getElementById('price').value);
    var paint = document.getElementById('paint').value;

    var usercar = new Car(licensePlate, manufacturer, model, paint, price);
    console.log(usercar);
    listOfCars.push(usercar);

    console.table(listOfCars);

  }

  var listOfCars = [];


//Sorts the array based on the prices of the objects in the array.
  function sortArray(){

    function compare(a,b) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    }
    listOfCars.sort(compare);
    console.table(listOfCars);

  }

//TODO:
  /* 1. Create a function that allows the user to search for a specific car based on a license plate.*/
  function searchFromArray(){
    var results = "";
    console.table("Search results: " + results);
  }

  /*2. Create a method discount() for the car -object that returns a discounted price of the vehicle. The discounted price depends
       on the price of the car. If the price is over 20 000, discount is 25%. If it is under 5000, it is 10%. Otherwise the discount is 15%.
       console.log(tesla.discount());
       console.log(fiat.discount()); */

  /*3. Create a new object called customer() that has attributes like name, age, ownedCar etc., and methods such as buyCar(car) */
