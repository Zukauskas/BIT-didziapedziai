console.log('Hello')


// window.addEventListener('load', function () {
//     const h1DOM = document.querySelector('h1')
//     console.log(h1DOM)
// })


// Logic operators || ir &&

// const A = 5;
// const B = 1;

// console.log('A && B:', A && B);
// console.log('B && A:', B && A);
// console.log('A || B:', A || B);
// console.log('B || A:', B || A);



/*
T && T => T
T && F => F

Short-circuit
F && T => F
F && F => F
*/


/*
F || T => T
F || F => F

Short-circuit
T || T => T
T || F => T
*/

// const num = 0;
// const numString = '' + num;

// console.log(typeof num, '=>', typeof numString);

// const string = '88';
// const stringNum = +string;

// console.log(typeof string, '=>', typeof stringNum);


// const l1 = !!num;
// const l2 = !!string;

// console.log(l1, l2);


console.log('---------------------')


// function declaration
// const sayHello = function () {
//     //console.log('Hello');

//     return 'Va kaip viskas buvo'
// }

// function call
// sayHello();

// console.log(`
// ---------------------

// `)

// const vaRun = sayHello();
// const vaNotRun = sayHello;

// console.log(vaRun);
// console.log(vaNotRun());

const fun = function () {
    console.log('ONE')
    return function () {
        console.log('TWO')
        return function () {
            console.log('THREE')
        }
    }
}


// const makeFun = fun;

// makeFun()()();

const hi1 = function () {
    return 'Va kaip viskas buvo';
}

const hi2 = () => {
    return 'Va kaip viskas buvo';
}

const hi3 = () => 'Va kaip viskas buvo';

const hi4 = _ => 'Va kaip viskas buvo';

//console.log(hi4());

// parametrai
const funFun = (a = 100, b) => {
    console.log(a - b)
}

const _15 = 15;

// argumentai
funFun(8);
console.clear();
console.log('---------------------')

const animals = [
    'racoon',
    'beaver',
    'moose'
];

const colors = [
    'pink',
    'crimson',
    'skyblue'
];

const addStars = word => console.log(`* ${word} *`);
const addPlus = word => console.log(`+ ${word} +`);

const iterator = (array, callbackFn) => {
    for (let i = 0; i < array.length; i++) {
        callbackFn(array[i]);
    }
}

// iterator(animals, addPlus);
// iterator(colors, addStars);

// console.log('---------------------')

// animals.forEach(addStars);
// colors.forEach(addPlus);

colors.forEach((word, index) => console.log(word, index));

/* for (let i = 0; i < animals.length; i++) {
    addStars(animals[i]);
}

console.log('---------------------')

for (let i = 0; i < colors.length; i++) {
    addStars(colors[i]);
} */


// animals.push('bird');

// console.table(animals);

animals.unshift('mouse', 'fox', 'wolf', 'rabbit');
animals.unshift(...colors)

// console.table(animals);

// animals.pop();
// animals.shift();

console.log(animals);

console.log({ ...colors })


