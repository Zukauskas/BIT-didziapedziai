// Lesson 5

const obj = {};

const arr = [];

const map = new Map();

class SayName {
    constructor() {
        this.papers = 'Yes';
    }

    static voice = 'Big One';

    static whatIsYourVoice() {
        return this.voice; // 'this' is a class
    }

    whatIsYourVoiceNotStatic() {
        return this.constructor.voice;
        // return this.voice; // 'this' is an object
    }

    whatIsYourName() {
        return this.name;
    }
}

class Cat extends SayName {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
        this.age = Math.floor(Math.random() * 10) + 1;
    }

    static voice = 'Small One';

    whatIsYourName() {
        return 'Miau';
    }
}

class Dog extends SayName {
    constructor(name) {
        super();
        this.name = name;
        this.age = Math.floor(Math.random() * 15) + 1;
        this.papers = 'No';
    }
}

const murka = new Cat('Mūrka', 'brown');
const pilkis = new Dog('Pilkis');

// console.log(obj);
// console.log(arr);
// console.log(map);
// console.log(murka);
// console.log(pilkis);
// console.log(murka.whatIsYourName());
// console.log(pilkis.whatIsYourName());
// console.log(SayName.voice);
// console.log(Cat.voice);
// console.log(Dog.voice);
// console.log(murka.voice);
console.log(Cat.whatIsYourVoice());
console.log(Dog.whatIsYourVoice());
console.log(murka.whatIsYourVoiceNotStatic());
console.log(pilkis.whatIsYourVoiceNotStatic());
