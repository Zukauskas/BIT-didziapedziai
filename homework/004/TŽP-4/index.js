function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

/* 

Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. 
Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą.
Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai.

*/

// const button = document.querySelector('button');
// const h2DOM = document.querySelectorAll('h2');

// button.addEventListener('click', () => {
//     h2DOM.forEach((h2) => (h2.innerText = rand(1, 6)));
//     if (h2DOM[0].innerText === h2DOM[1].innerText) {
//         h2DOM.forEach((h2) => (h2.style.color = 'red'));
//     } else {
//         h2DOM.forEach((h2) => (h2.style.color = 'black'));
//     }
// });

/* 

Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. 
Susikurkite tuščią masyvą, skaičiams saugoti. 
Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. 
Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. 
<h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą.

*/

// const arr = [];
// const h3DOM = document.querySelector('h3');
// const buttonDOM = document.querySelector('button');

// buttonDOM.addEventListener('click', () => {
//     const randNum = rand(1, 10);
//     arr.push(randNum);
//     console.log(arr);
//     h3DOM.innerText = arr.reduce((a, b) => a + b);
// });

/*

Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. 
JS pagalba perskaitykite masyvą africa 
ir naudodami createElement()  ir kitus reikalingus metodus 
sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje 
ir juos įrašykite į <ul> tago vidų. 
Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite.

*/

// const ulDOM = document.querySelector('ul');

// africa.forEach((animal) => {
//     if (animal !== '') {
//         const liDOM = document.createElement('li');
//         liDOM.innerText = animal;
//         ulDOM.appendChild(liDOM);
//     }
// });

/* 

Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. 
Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką 
su skaičiais būtų atlikta atitinkama aritmetinė operacija, o jos rezultatas būtų atvaizduotas <h5> tage. 
Pasirinkite patys sau patogiausius metodus tai atlikti.

*/

// const inputDOMOne = document.querySelector('.one');
// const inputDOMTwo = document.querySelector('.two');
// const h5DOM = document.querySelector('h5');
// const buttonDOMPlus = document.querySelector('.plus');
// const buttonDOMMinus = document.querySelector('.minus');

// buttonDOMPlus.addEventListener('click', () => {
//     h5DOM.innerText = Number(inputDOMOne.value) + Number(inputDOMTwo.value);
// });

// buttonDOMMinus.addEventListener('click', () => {
//     h5DOM.innerText = Number(inputDOMOne.value) - Number(inputDOMTwo.value);
// });

/*

(BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. 
JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, 
o visus gautus stringus sudėkite į vieną bendrą stringą. 
Tą stirngą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. 
Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.

*/

const ulDOM = document.querySelector('ul');

let str = '';

australia.forEach((animal) => (animal === 'Dingo' ? (str += `<li style="background-color: blue">${animal}</li>`) : (str += `<li>${animal}</li>`)));

ulDOM.innerHTML = str;
