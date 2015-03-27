var Vehicle = function(make, model, year){
  this.make = make;
  this.model =  model;
  this.year = year;
};

var vehicle = new Vehicle("Ford", "Expedition", 2001); 

Vehicle.prototype.honk = function () {
  console.log("beep");
};

var Car = function(make, model, year){
  this.make = make;
  this.model =  model;
  this.year = year;
};

Car.prototype = new Vehicle;
Car.prototype.constructor = Car;