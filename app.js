console.log('Hello World');

var personName = true;
personName = 'Sam';
personName = 21;

var type = typeof personName;


var age = 21;
var city = 'Banglore';

console.log(name, age, city, type, typeof age);

//Arrays
var cities = [true, 'Hello World', 21, [1, 2, 3, 6]];

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

for (var i = 0; i < cities.length; i++) {
    console.log(i, cities[i]);
}

for (city of cities) {
    console.log(city);
}

cities = ['New Delhi', 'Banglore', 'Mumbai', 'Chennai', 'Madurai'];

var city = cities.find(function (e) {
    return e.charAt(0) == 'M'
});
console.log(city);

var cityStartingWithM = cities.filter(function (e) {
    return e.charAt(0) == 'M'
});

console.log(cityStartingWithM);

var numbers = [23, 43, 11, 87, 90];
var sum = numbers.reduce(function (sum, n) {
    return sum + n;
}, 0);
console.log(sum);

var result = cities.reduce(function (res, e) {
    if (e.charAt(0) == 'M') {
        return res + ', ' + e;
    } else {
        return res;
    }
}, '');
console.log(result);

var newArray = numbers.map(function (e) {
    return e * 2;
});
console.log(newArray);

var numbers = [2, 88, -9, 34, 1, -23];

var largest = numbers.reduce((res, e) => e > res ? e : res, numbers[0]);
console.log(largest);

var allNegatives = numbers.filter(e => e < 0);
console.log(allNegatives);

var allPositives = numbers
    .filter(e => e > 0)
    .reduce((sum, e) => sum + e, 0);

console.log(sumOfAllPositives);

//Functions
console.log('--------------FUNCTIONS------------');
var f = function (n1, n2) {
    return n1 + n2;
};

x = 3;
var sum = f(2, 3);
console.log(sum);

var average = function (x, y, func) {
    var sum = func(x, y) / 2;
    return sum;
};

var avg = average(3, 6, function (n1, n2) {
    return n1 + n2;
});

console.log(avg);

//Objects





