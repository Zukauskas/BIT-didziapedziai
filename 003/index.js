const A = ['a', 'b', 'c'];

const B = A;

const addStars = (word) => console.log(`* ${word} *`);

Array.prototype.go = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
};

B.push('d');

console.log(A, B);

B.go(addStars);
B.forEach(addStars);
