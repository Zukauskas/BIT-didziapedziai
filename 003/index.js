const A = ['a', 'b', 'c'];

const B = A;

const addStars = (word) => console.log(`* ${word} *`);

Array.prototype.go = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
};

const animals = ['racoon', 'beaver', 'moose', 'fox'];

B.push('');

console.log(A, B);

B.go(addStars);
B.forEach(addStars);

console.log(A);

const forEachReturn = A.forEach((l) => console.log(l));

const mapReturn = A.map((l) => l + '--->');

console.log(forEachReturn);
console.log(mapReturn);

console.clear();

// REACT PROGRAMER

const out = animals.map((a) => '<i style="color: crimson; display:block;">' + a + '</i>');

// REACT INSIDE

let HTML = '';
out.forEach((a) => (HTML += a));

document.querySelector('h1').innerHTML = HTML;

console.clear();

// Filter method

const filtered = animals.filter((l) => l != 'beaver').map((l) => l + ' * ');
console.log(animals);
console.log(filtered);

console.clear();

const state = ['racoon', 'beaver', 'moose', 'fox'];

// state.push('wolf'); // mirstam
// state.sort(); // mirstam

// console.log(state);
// console.log([...state, 'wolf'].sort());

console.clear();

const animalsCopy = [...state];

/* animalsCopy.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}); */

animalsCopy.sort((a, b) => b.localeCompare(a));

console.log(animalsCopy);

const numbers = [88, 34, 10, 158, 1];

console.log(numbers);

numbers.sort((a, b) => b - a);

console.log(numbers);

console.clear();

const simpleObj = {};

simpleObj.name = 'John';
simpleObj.surname = 'Smith';

const simpleObj2 = { ...simpleObj };

simpleObj2.name = 'Aaron';

const simpleObj3 = {
    name: 'Petras',
    surname: 'Petraitis',
};

const name = 'Lina';
const surname = 'Petraitienė';

const simpleObj4 = {
    name,
    surname,
};

const prop = 'surname';

const simpleObj5 = {};

simpleObj5.name = 'Bronius';
simpleObj5[prop] = 'Kisauskas';

console.log(simpleObj, simpleObj2, simpleObj3, simpleObj4, simpleObj5);

console.clear();

const house = [simpleObj, simpleObj2, simpleObj3, simpleObj4, simpleObj5];

house.sort((a, b) => {
    if (a.surname > b.surname) return 1;
    if (a.surname < b.surname) return -1;

    // if surnames are equal, sort by name:
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;

    // if names are equal, return 0:
    return 0;
});

console.log(house);
