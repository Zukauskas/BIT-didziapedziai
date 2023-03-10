console.clear();

// 1. Sugeneruokite masyvą iš 30 elementų(indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const arr = [...Array(30)].map(_ => parseInt(Math.random() * 21 + 5));
console.log(arr);

// 2. Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

console.log(arr.filter(x => x > 10).length);

// Raskite didžiausią masyvo reikšmę ir jos indeksą;

const max = Math.max(...arr);
const maxIndex = arr.indexOf(max);
console.log(max, maxIndex);

// Suskaičiuokite visų porinių(lyginių) indeksų reikšmių sumą;

console.log(arr.filter((_, i) => i % 2 === 0).reduce((t, c) => t + c, 0));

// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let newArr = arr.map((x, i) => x - i);
console.log(newArr);

// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

newArr = (newArr.concat([...Array(10)].map(_ => parseInt(Math.random() * 21 + 5))));
console.log(newArr);

// Iš masyvo elementų sukurkite du naujus masyvus.Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių(pagal neporinį - porinį indeksą, ne reikšmę);

const oddArray = newArr.filter((_, i) => i % 2 !== 0);
const evenArray = newArr.filter((_, i) => i % 2 === 0);
console.log(oddArray, evenArray);

// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

newArr = newArr.map((x, i) => i % 2 === 0 && x > 15 ? 0 : x);
console.log(newArr);

// Suraskite pirmą(mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

console.log(newArr.findIndex(x => x > 10));

// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const letterArray = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);

const aCount = letterArray.filter(x => x === 'A').length;
const bCount = letterArray.filter(x => x === 'B').length;
const cCount = letterArray.filter(x => x === 'C').length;
const dCount = letterArray.filter(x => x === 'D').length;

console.log(aCount, bCount, cCount, dCount);

console.log(letterArray);
// 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą.Sudėkite masyvus, sudėdami atitinkamas reikšmes.Paskaičiuokite kiek unikalių(po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

const letters1 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);
const letters2 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);
const letters3 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);

const combinedArray = letters1.map((x, i) => x + letters2[i] + letters3[i]);
console.log(combinedArray);

const uniqueValues = [...new Set(combinedArray)];
console.log(uniqueValues);
console.log(uniqueValues.length)

// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve(t.y.neturi kartotis).
let tempArr1 = []
const randUniqueArray1 = [...Array(100).fill(0)].map(_ => {
    let rand = parseInt(Math.random() * 900 + 100);
    while (tempArr1.includes(rand)) {
        rand = parseInt(Math.random() * 900 + 100);
    }
    tempArr1.push(rand);
    return rand;
});

let tempArr2 = []
const randUniqueArray2 = [...Array(100).fill(0)].map(_ => {
    let rand = parseInt(Math.random() * 900 + 100);
    while (tempArr2.includes(rand)) {
        rand = parseInt(Math.random() * 900 + 100);
    }
    tempArr2.push(rand);
    return rand;
});

console.log(randUniqueArray1);
console.log(randUniqueArray2);

// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.

const difference = randUniqueArray1.filter(x => !randUniqueArray2.includes(x));
console.log(difference);

// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.

const sameArray = randUniqueArray1.filter(x => randUniqueArray2.includes(x));
console.log(sameArray);

// 8. Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.

const mutantArray = [...Array(Math.max(...randUniqueArray1) + 1)].map((_, i) => randUniqueArray2[randUniqueArray1.indexOf(i)]);
console.log(mutantArray);

// 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai - atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma.Ketvirtas - antro ir trečio suma.Penktas trečio ir ketvirto suma ir t.t
const numArray = [...Array(10)].reduce((acc, _, i) => {
    if (i < 2) {
        acc.push(parseInt(Math.random() * 21 + 5));
    } else {
        acc.push(acc[i - 1] + acc[i - 2]);
    }
    return acc;
}, []);

console.log(numArray);
