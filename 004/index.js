// Set is a collection of unique values

const fancySet = new Set();

fancySet.add('racoon');
fancySet.add('fox');
fancySet.add('moose');
fancySet.add('wolf');
fancySet.add('fox'); // This one will be ignored

const fox = { animal: 'fox' };
const fox1 = { ...fox };

// fancySet.add({ animal: 'fox' }); // This one will be added
// fancySet.add({ animal: 'fox' }); // This one will be added too because it's a different objects
// fancySet.add(fox);
// fancySet.add(fox1);

// console.log(fancySet.has('fox')); // true
// console.log(fancySet.has('beaver')); // false

// console.log(fancySet, fancySet.size);

const randomSet = new Set();

do {
    const genDigit = Math.ceil(Math.random() * 10);
    randomSet.add(genDigit);
} while (randomSet.size < 10);

console.log([...randomSet]);
console.clear();

const arr = [2, 5, 8, 1, 6, 7, 2, 2];
console.log(arr);

const arrSet = [...new Set(arr)];

console.log(arrSet);

console.clear();

console.log(new Set([...fancySet].sort()));

const fancyArr = [...fancySet].sort();

fancySet.clear();

fancyArr.forEach((item) => fancySet.add(item));

console.log(fancySet);

console.clear();

// new Map() - collection of key-value pairs (like object) but with any type of keys

const fancyMap = new Map();

fancyMap.set({ a: 1 }, 'Raccoon');
fancyMap.set({ a: 2 }, 'Fox');
fancyMap.set(function () {}, 'beaver');

fancyMap.forEach((key, value) => console.log(key, value));

const arrMap = [...fancyMap];

fancyMap.clear();

arrMap.sort((a, b) => a[1].localeCompare(b[1]));

arrMap.forEach((item) => fancyMap.set(item[0], item[1]));

console.log(arrMap);
console.log(fancyMap);

console.clear();

let shopArr = [
    { color: 'pink', dot: true, id: 1 },
    { color: 'skyblue', dot: true, id: 5 },
    { color: 'crimson', dot: false, id: 3 },
    { color: 'pink', dot: false, id: 8 },
];

// add
shopArr.push({ color: 'coral', dot: true, id: 17 });

// find
console.log(
    '3:',
    shopArr.find((item) => item.id === 3)
);

// check if exists
console.log('9:', !!shopArr.find((item) => item.id === 9));

// remove
shopArr = shopArr.filter((item) => item.id !== 5);

console.log(shopArr);

console.clear();

const shopMap = new Map([
    [1, { color: 'pink', dot: true, id: 1 }],
    [5, { color: 'skyblue', dot: true, id: 5 }],
    [3, { color: 'crimson', dot: false, id: 3 }],
    [8, { color: 'pink', dot: false, id: 8 }],
]);

console.log('3:', shopMap.get(3)); //find
console.log('8:', shopMap.has(8)); // check if exists
shopMap.delete(5); // remove
shopMap.set(17, { color: 'coral', dot: true, id: 17 }); // add

console.log(shopMap);
console.clear();

let shopArrJSON = JSON.stringify(shopArr);
console.log(shopArrJSON);

let shopArrFromJSON = JSON.parse(shopArrJSON);

console.log(shopArrFromJSON);

console.clear();

let d = '42';

const dJSON = JSON.stringify(d);

// console.log(dJSON);

const dFromJSON = JSON.parse(dJSON);

console.log(dFromJSON, typeof dFromJSON);
