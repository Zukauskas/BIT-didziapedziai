function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* 
Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.
*/

const kauliukas1 = rand(1, 6);
const kauliukas2 = rand(1, 6);
const suma = kauliukas1 + kauliukas2;

if (suma > 8) {
    console.log(`Laimėjote! Kauliukas 1: ${kauliukas1}, Kauliukas 2: ${kauliukas2}`);
} else {
    console.log(`Pralošėte! Kauliukas 1: ${kauliukas1}, Kauliukas 2: ${kauliukas2}`);
}

/* 

Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis. Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.
*/

const pilkis = rand(3, 6);
const murklys = rand(3, 6);

if (pilkis > murklys) {
    console.log(`Pilkis ${pilkis} kg, Murklys: ${murklys} kg. Murklys lengvesnis.`);
} else if (pilkis < murklys) {
    console.log(`Pilkis ${pilkis} kg, Murklys: ${murklys} kg. Pilkis lengvesnis.`);
} else {
    console.log(`Pilkis ${pilkis} kg, Murklys: ${murklys} kg. Katinukų svoriai vienodi.`);
}

/* 
Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.

*/

const katinukuValtis = 15;
const karviuValtis = 15;

const katinukai = rand(0, 30);
const karves = rand(0, 30);

console.log(`Katinukai: ${katinukai}, Karvės: ${karves}`);

if (katinukai <= katinukuValtis && karves <= karviuValtis) {
    console.log(`Telpa`);
} else {
    console.log(`Netelpa`);
}

/* 

Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
*/

const kauliukas = rand(1, 6);

if (kauliukas === 1 || kauliukas === 5) {
    console.log(`Televizorius`);
} else if (kauliukas === 3 || kauliukas === 4) {
    console.log(`Skalbimo mašina`);
} else {
    console.log(`Šaldytuvas`);
}

/* 

(BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7. Skaičius atspausdinkite nuo mažiausio iki didžiausio. Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;

*/

const randArray = [...Array(3)]
    .map(() => rand(1, 7))
    .sort((a, b) => a - b)
    .forEach((item) => console.log(item));
