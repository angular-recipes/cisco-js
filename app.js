console.log('Hello World');

var personName = true;
personName = 'Sam';
personName = 21;

var type = typeof personName;


var age = 21;
var city = 'Banglore';

console.log(name, age, city, type, typeof age);

//Arrays
var cities = [true, 'Hello World', 21, [1,2,3,6]];

console.log(cities[0]);
console.log(cities[7]);
console.log(cities[3][3]);

cities.push('new element');
console.log(cities);

var lastElement = cities.pop();
console.log(lastElement, cities);

cities.unshift(23);
console.log(cities);

var firstElement = cities.shift(23);
console.log(firstElement, cities);

for(var i=0; i < cities.length; i++) {
    console.log(i, cities[i]);
}

for(city of cities) {
    console.log(city);
}

//Functions


