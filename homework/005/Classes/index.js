/* 

1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

*/

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis);
    }
}

const kibiriukas = new Kibiras1();

kibiriukas.prideti1Akmeni();

kibiriukas.kiekPririnktaAkmenu();

kibiriukas.pridetiDaugAkmenu(5);

kibiriukas.kiekPririnktaAkmenu();

/* 

2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

*/

class Pinigine {
    constructor(popieriniaiPinigai, metaliniaiPinigai) {
        this.popieriniaiPinigai = popieriniaiPinigai;
        this.metaliniaiPinigai = metaliniaiPinigai;
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        console.log(this.popieriniaiPinigai + this.metaliniaiPinigai);
    }
}

const pinigine = new Pinigine(0, 0);

pinigine.ideti(1);

pinigine.ideti(7);

pinigine.ideti(1.5);

pinigine.skaiciuoti();

console.clear();

/*
 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

*/

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(Troleibusas.visiKeleiviai);
    }

    ilipa(keleiviai) {
        this.keleiviuSkaicius += keleiviai;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviai);
    }

    islipa(keleiviai) {
        if (this.keleiviuSkaicius - keleiviai < 0) {
            this.keleiviuSkaicius = 0;
            return;
        }
        this.keleiviuSkaicius -= keleiviai;
        Troleibusas.bendrasKeleiviuSkaicius(-keleiviai);
    }

    vaziuoja() {
        console.log(this.keleiviuSkaicius);
    }
}

const troleibusas1 = new Troleibusas();
const troleibusas2 = new Troleibusas();

troleibusas1.ilipa(5);

troleibusas1.vaziuoja(); // 5

troleibusas1.islipa(3);

troleibusas1.vaziuoja(); // 2

troleibusas2.ilipa(10);

troleibusas2.vaziuoja(); // 10

troleibusas2.islipa(7);

troleibusas2.vaziuoja(); // 3

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose(); // 5

console.clear();

/* 

5. (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

*/

class PirkiniuKrepselis {
    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        if (this.turinys.has('Sūreliai')) {
            this.turinys.set('Sūreliai', this.turinys.get('Sūreliai') + kiekis);
        } else {
            this.turinys.set('Sūreliai', kiekis);
        }
    }

    idetiPieno(kiekis) {
        if (this.turinys.has('Pienas')) {
            this.turinys.set('Pienas', this.turinys.get('Pienas') + kiekis);
        } else {
            this.turinys.set('Pienas', kiekis);
        }
    }

    idetiDuonos(kiekis) {
        if (this.turinys.has('Duona')) {
            this.turinys.set('Duona', this.turinys.get('Duona') + kiekis);
        } else {
            this.turinys.set('Duona', kiekis);
        }
    }

    krepselioTurinys() {
        console.log(this.turinys);
    }
}

const pirkiniuKrepselis = new PirkiniuKrepselis();

pirkiniuKrepselis.idetiSureli(2);

pirkiniuKrepselis.idetiPieno(1);

pirkiniuKrepselis.idetiDuonos(3);

pirkiniuKrepselis.krepselioTurinys();

pirkiniuKrepselis.idetiSureli(1);

pirkiniuKrepselis.idetiPieno(1);

pirkiniuKrepselis.idetiDuonos(1);

pirkiniuKrepselis.krepselioTurinys();

console.clear();
