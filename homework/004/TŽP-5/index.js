/* 
Reikalavimui JS kodui: turi būti sukurtas masyvas balls ir klasė ColorBall.
Reikalavimui HTML: turi būti sukurti du laukeliai duomenims įvesti- spalvai ir numeriui; vieta, kurioje bus atvaizduojami sukurti rutuliukai, du mygtukai- “sukurti naują” ir “ištrinti seniausią”.
Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra reikalingi. Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline be jokių ribojimų.
*/

const colorPickerDOM = document.getElementById('colorPicker');
const numberPickerDOM = document.getElementById('numberPicker');
const containerDOM = document.getElementById('container');
const addDOM = document.getElementById('prideti');
const removeDOM = document.getElementById('trinti');

// Sukurti klasę ColorBall, kuri turėtų dvi savybes: color ir number. Savybės turi būti įrašomos objekto kūrimo metu. Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą balls.

class ColorBall {
    constructor(color, number) {
        this.color = color;
        this.number = number;
    }
}

let balls = [];

// Mygtukas “sukurti naują” turi inicijuoti kodą, kuris perskaitytų duomenis iš laukelių ir pagal juos sukurtų naują objektą.

addDOM.addEventListener('click', () => {
    const color = colorPickerDOM.value;
    const number = numberPickerDOM.value;
    const newBall = new ColorBall(color, number);
    balls.push(newBall);
    generateBalls();
});

// Masyvas turi būti atvaizduojamas vizualiai HTML’e. Jame esantys objektai turi būti atvaizduojami kaip atitinkamos spalvos apskritimai su numeriu viduryje.

function generateBalls() {
    containerDOM.innerHTML = '';
    balls.forEach((ball) => {
        const ballDOM = document.createElement('div');
        ballDOM.style.backgroundColor = ball.color;
        ballDOM.style.width = '50px';
        ballDOM.style.height = '50px';
        ballDOM.style.borderRadius = '50%';
        ballDOM.style.display = 'inline-block';
        ballDOM.style.margin = '10px';
        ballDOM.style.textAlign = 'center';
        ballDOM.style.lineHeight = '50px';
        ballDOM.innerText = ball.number;
        containerDOM.appendChild(ballDOM);
    });
}

// Mygtukas “ištrinti seniausią” turi inicijuoti kodą, kuris iš masyvo pašaliną seniausią kamuoliuką (seniausias yra masyvo pradžioje)
// Pasikeitus masyvo elementams (pridėjus, ištrynus) vizualinis masyvo atvaizdas HTML’e turi keistis dinamiškai.

removeDOM.addEventListener('click', () => {
    balls.shift();
    generateBalls();
});
