//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, status, color) {
  this.name = name;
  this.status = "normal";
  this.color = color;
  this.hungry = true;
}
// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog("sadie");
let moonshine = new Dog("moonshine");
let atticus = new Dog("atticus");
sadie.color = "black";
sadie.hungry = false;

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human() {
  this.pet = function(dog) {
    dog.status = "happy";
  };
  this.feed = function(dog) {
    dog.hungry = false;
  };
}

// Instances of Human
// Needed: mason, julia
let mason = new Human("mason");
let julia = new Human("julia");
mason.cool = false;
julia.cool = true;
