function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const food = ['bandelė', 'bulkutė', 'duona', 'batonas', 'pyragas', 'baronka', 'riestainis', 'javainis', 'paplotėlis'];

/* 

Sukurti Map tipo objektą. Į jį sudėti rand() 5 - 25 skaičius. Kaip raktus naudoti masyvo food reikšmes.

*/

const map = new Map();

for (let i = 0; i < food.length; i++) {
    map.set(food[i], rand(5, 25));
}

/* 

Sukurti Map tipo objektą. Kaip raktus naudoti rand() 10 - 20 skaičius, 
o kaip reikšmes naudoti food masyvo elementus. Elementai į Map objektą 
turi būti sudėti eilės tvarka kaip jie sudėti masyve ir visi. Raktų reikšmių 
eiliškumas, tuo tarpu, turi būti atsitiktinis.

*/

const map2 = new Map();

for (let i = 0; i < food.length; i++) {
    let randNum = rand(10, 20);
    while (map2.has(randNum)) {
        randNum = rand(10, 20);
    }
    map2.set(randNum, food[i]);
}

/* 

Sukurti Map tipo objektą, kaip antro uždavinio Map objekto kopiją (kloną). 
Sukurtame objekte išrūšiuoti elementus pagal abėcėle priešinga tvarka (z - a).

*/

const map3 = new Map([...map2].sort((a, b) => (a[1] > b[1] ? -1 : 1)));

/* 

Sukurti Set tipo objektą. Į jį sudėti food masyvo reikšmes. 
Iš gauto Set objekto pašalinti visas reikšmes, kuriose antroji raidė yra “a”.

*/

const set = new Set(food);

set.forEach((v) => (v[1] === 'a' ? set.delete(v) : ''));

/* 

Sukurti Set tipo objektą, kuriame būtų 22 reikšmės rand() 5 - 35 skaičiai.

*/

const set2 = new Set();

while (set2.size < 22) {
    set2.add(rand(5, 35));
}

console.log(set2);
