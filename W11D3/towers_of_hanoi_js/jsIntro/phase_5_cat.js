function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`
};

let steve = new Cat("Steve", "Carl");
let flerpen = new Cat("flerpen", "Snark Shark");

console.log(steve.cuteStatement());
console.log(flerpen.cuteStatement());

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}!`;
};

console.log(steve.cuteStatement());
console.log(flerpen.cuteStatement());

Cat.prototype.meow = function () {
  return "meow";
};

console.log(steve.meow());
console.log(flerpen.meow());

steve.meow = function () {
  return "Moar LASAG pls!"
};

console.log(steve.meow());
console.log(flerpen.meow());