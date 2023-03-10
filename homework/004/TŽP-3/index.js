function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

/* 

Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).

*/

bitGirls.unshift('Nausėda');

console.log(bitGirls);

/* 

Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis masyvas turėtų elementus iš mažų, dviejų narių, masyviukų: 
pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.

*/

const bitCats = cats.map((cat) => [cat, rand(0, 1) ? 'storas' : 'normalus']);

console.log(bitCats);

/* 

bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.

*/

let storuKatinuku = bitCats.filter((cat) => cat[1] === 'storas').length;
let normaliuKatinuku = bitCats.filter((cat) => cat[1] === 'normalus').length;

console.log(`Storų katinukų yra: ${storuKatinuku}`);
console.log(`Normalių katinukų yra: ${normaliuKatinuku}`);

/* 

Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) 
Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.


*/

bitCats.sort((a, b) => (a[0][1] > b[0][1] ? 1 : -1));

console.log(bitCats);

/*

(BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. 
Nausėdai katinuko neduokit (nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.

*/

const happyCats = bitGirls.map((girl, index) => (index === 0 ? [girl, 'Barsukas'] : [girl, bitCats[index - 1][0]]));

console.log(happyCats);
