"use strict";
console.clear();

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.


Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

//---------------------------SNACK 1
//#region Snack-1
const pEleBiciText = document.createElement("p");
pEleBiciText.style.fontSize = "2em";
const divEleBici = document.getElementById("bici");

const bmx = {
    nome: "Bmx",
    peso: 20,
};
const graziella = {
    nome: "graziella",
    peso: 10,
};
const scheggia = {
    nome: "scheggia",
    peso: 5,
};

const bycicle = [bmx, graziella, scheggia];

let tempBicycle = null;
const lighBicycle = CheckWeight();

pEleBiciText.innerHTML = `nome: ${lighBicycle.nome}, peso: ${lighBicycle.peso}`;
divEleBici.appendChild(pEleBiciText);
//#endregion
//---------------------------SNACK 2
const pagnotta={
    nome:"Pagnotta",
    puntiFatti: 0,
    falliSubiti:0,
    RandomNum(){
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
        console.log(this.puntiFatti+ " | "+ this.falliSubiti);
    }
};
const roma={
    nome:"Roma",
    puntiFatti: 0,
    falliSubiti:0,
    RandomNum(){
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
        console.log(this.puntiFatti+ " | "+ this.falliSubiti);
    }
};
const lazio={
    nome:"Lazio",
    puntiFatti: 0,
    falliSubiti:0,
    RandomNum(){
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
        console.log(this.puntiFatti+ " | "+ this.falliSubiti);
    }
};
const milan={
    nome:"Milan",
    puntiFatti: 0,
    falliSubiti:0,
    RandomNum(){
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
        console.log(this.puntiFatti+ " | "+ this.falliSubiti);
    }
};

const squadre=[pagnotta, roma, lazio, milan];

pagnotta.RandomNum();










//function
//snack-1
function CheckWeight() {
    tempBicycle = bycicle[0];
    for (let i = 0; i < bycicle.length; i++) {
        if (tempBicycle.peso > bycicle[i].peso) {
            tempBicycle = bycicle[i];
            console.log(tempBicycle);
        }
    }
    return tempBicycle;
}

//function utilies
function GetRandomNum(){
    return Math.floor(Math.random() * 100 +1);
}