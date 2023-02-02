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

console.log(state);
console.log([...state, 'wolf'].sort());
