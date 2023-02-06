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

for (const o of fancyMap) {
    console.log(o);
}
