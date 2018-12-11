function Person(name) {
    this.name = name;
}

var sam = new Person('Sam Dsouza');

console.log(sam);

sam.age = 23;

sam.introduce = function() {
    console.log('Hi! I am ' + this.name);
}

console.log(sam);
sam.introduce();

var david = {
    name: 'David Boon',
    age: 21,
    introduce: function() { 
        console.log('Hi! this is ' + this.name);
    }
};

console.log(david);
david.introduce();

//ES6
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log('Hey I am ' + this.name + ' and I am ' + this.age + ' years old');
    }
}

var mike = new Human('Mike Atherton', 43);
mike.address = {
    city: 'Banglore',
    state: 'Karnataka'
};


console.log(mike);
mike.introduce();

var students = [
    {
        name: 'Sam',
        age: 21
    },
    {
        name: 'David',
        age: 32
    },
    {
        name: 'Mona',
        age: 38
    },
    {
        name: 'Steve',
        age: 12
    }
];

var studentNames = students.map(e => e.name);
console.log(studentNames);

var above30 = students
    .filter(e => e.age > 30)
    .map(e => e.name)
    .join(', ');
    
console.log(above30);




