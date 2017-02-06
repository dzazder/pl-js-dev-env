'use strict';

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log('Meeeeooow');
  }
}

var cat = new Cat('Fluffy', 'White');

console.log(cat);
cat.speak();

Object.defineProperty(cat, 'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

Object.defineProperty(cat, 'fullName',
{
  get: function() {
    return this.name.first + ' ' + this.name.last
  },
  set: function(value) {
    var nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});

cat.fullName = "Muffin top";
console.log(cat.fullName);
