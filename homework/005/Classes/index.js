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

Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

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
