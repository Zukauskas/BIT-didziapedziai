function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];


/* 

Sukurti 100 sąskaitų masyvą.

Kiekviena sąskaita yra objektas ir turi po 5 savybes:
number: pagal taisykle INV001, INV002, … INV099, INV100;
products: masyvas random ilgio nuo 1 iki 10;
products masyvo elementai objektai, turintys po 4 savybes:
title: random iš products masyvo (vienoje sąskaitoje gali būti keli vienodi produktai. Vistiek jų kainos bus skirtingos); 
price: random skaičius su kableliu nuo 1.00 iki 100.00; 
amount: random skaičius nuo 1 iki 20;
total:  price ir amount sandauga.
total: visų products masyvo elementų total suma
vat: 21% nuo total
grandTotal: vat ir total suma

*/

const saskaitos = [...Array(100)].map((_, i) => {
    const number = `INV${i < 9 ? '00' : i < 99 ? '0' : ''}${i + 1}`;
    const productsBought = [...Array(rand(1, 10))].map(_ => {
        const title = products[rand(0, products.length - 1)];
        const price = rand(100, 10000) / 100;
        const amount = rand(1, 20);
        const total = Number((price * amount).toFixed(2));
        return { title, price, amount, total };
    });
    const total = productsBought.reduce((acc, cur) => acc + cur.total, 0);
    const vat = Number((total * 0.21).toFixed(2));
    const grandTotal = total + vat;
    return { number, productsBought, total, vat, grandTotal };
});

console.log(saskaitos);


/* 

Sugeneruotame (ne generavimo metu!) masyve paskaičiuoti ir konsolėje atspausdinti visų sąskaitų grandTotal sumą, produktų sąrašą prie kiekvieno produkto pavadinimo pridedant koks to produkto kiekis yra visose sąskaitose bendrai ir už kokią bendrą sumą.

Pvz: 
Dviratis 35 479.55
Triratis 10 457.22
…..
Medinė dėžė 47 1025.74

*/

const grandTotalAll = saskaitos.reduce((acc, cur) => acc + cur.grandTotal, 0);
console.log(grandTotalAll.toFixed(2));

const productsBoughtAll = products.map(product => {
    const amount = saskaitos.reduce((acc, cur) => acc + cur.productsBought.filter(p => p.title === product).reduce((acc, cur) => acc + cur.amount, 0), 0);
    const total = saskaitos.reduce((acc, cur) => acc + cur.productsBought.filter(p => p.title === product).reduce((acc, cur) => acc + cur.total, 0), 0);
    return product + ' ' + amount + ' ' + total.toFixed(2);
});

productsBoughtAll.forEach((product, index) => console.log(index + 1, product));


