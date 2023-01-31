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

const newArr = arr.map((x, i) => x - i);
console.log(newArr);

// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

let newArr2 = (newArr.concat([...Array(10)].map(_ => parseInt(Math.random() * 21 + 5))));
console.log(newArr2);

// Iš masyvo elementų sukurkite du naujus masyvus.Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių(pagal neporinį - porinį indeksą, ne reikšmę);

const oddArray = newArr2.filter((_, i) => i % 2 !== 0);
const evenArray = newArr2.filter((_, i) => i % 2 === 0);
console.log(oddArray, evenArray);

// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

newArr2 = newArr2.map((x, i) => i % 2 === 0 && x > 15 ? 0 : x);
console.log(newArr2);

// Suraskite pirmą(mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

console.log(newArr2.findIndex(x => x > 10));

// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const letterArray = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][parseInt(Math.random() * 4)]);

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

const randomArray1 = [...Array(100)].map((a, i, arr) => {
    let random = parseInt(Math.random() * 900 + 100);
    while (arr.indexOf(random) !== -1) {
        random = parseInt(Math.random() * 900 + 100);
    }
    return random;
});

const randomArray2 = [...Array(100)].map(_ => parseInt(Math.random() * 900 + 100));


console.log(new Set(randomArray1).size);

// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
// 8. Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
// 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai - atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma.Ketvirtas - antro ir trečio suma.Penktas trečio ir ketvirto suma ir t.t.
// 