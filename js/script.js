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
//#endregion Snack-1
//---------------------------SNACK 2
//#region Snack-2
//#region Objects
const pagnotta = {
    nome: "Pagnotta",
    puntiFatti: 0,
    falliSubiti: 0,
    RandomNum() {
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
    },
    GetNameFalli() {
        this.RandomNum();
        return { nome: this.nome, falliSubiti: this.falliSubiti };
    }
};
const roma = {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
    RandomNum() {
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
    },
    GetNameFalli() {
        this.RandomNum();
        return { nome: this.nome, falliSubiti: this.falliSubiti };
    }
};
const lazio = {
    nome: "Lazio",
    puntiFatti: 0,
    falliSubiti: 0,
    RandomNum() {
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
    },
    GetNameFalli() {
        this.RandomNum();
        return { nome: this.nome, falliSubiti: this.falliSubiti };
    }
};
const milan = {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
    RandomNum() {
        this.puntiFatti = GetRandomNum();
        this.falliSubiti = GetRandomNum();
    },
    GetNameFalli() {
        this.RandomNum();
        return { nome: this.nome, falliSubiti: this.falliSubiti };
    }
};
//#endregion Objects

const divEleCalcio = document.getElementById("calcio");

const squadre = [pagnotta, roma, lazio, milan];
const arraySquadre2ele = [];

SoccerData();
//#endregion Snack-2

const arrayVuota = [];
const arrayPiena = [];
const bonusVar = Bonus(arrayVuota, 8,25 );
console.log(bonusVar);

function Bonus(myArray,numMin, numMax){
    const fragment = document.createDocumentFragment();
    const divEleBonus = document.getElementById("bonus");
    
    for(let i = 0; i<20;i++){
        arrayPiena.push(GetRandomNum());
    }
    console.log(arrayPiena);
    let j = 0;
    for(let i = numMin; i<= numMax; i++){     
        if(arrayPiena.length<=i)
            break;
        else{
            const pEleBonus = document.createElement("p");
            myArray.push(arrayPiena[i]);
    
            pEleBonus.innerHTML = `${myArray[j]}, index of => + ${i}`;
            fragment.appendChild(pEleBonus);
            j++;
        }
  
    }
    divEleBonus.appendChild(fragment);
    return myArray;
}







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
//snack-2
function SoccerData() {
    const fragment = document.createDocumentFragment();//create a var temp to store the p ele
    let counter = 0;
    squadre.forEach(element => {
        arraySquadre2ele.push(element.GetNameFalli()); //refresh and change numbers
        const pEleCalcio = document.createElement("p");
        pEleCalcio.style.fontSize = "2em";

        pEleCalcio.innerHTML = `squadra: ${arraySquadre2ele[counter].nome}, falli subiti: ${arraySquadre2ele[counter].falliSubiti}`;
        
        fragment.appendChild(pEleCalcio);
        counter++;
    });
    divEleCalcio.appendChild(fragment);
    console.log(arraySquadre2ele);
}
//function utilies
function GetRandomNum() {
    return Math.floor(Math.random() * 100 + 1);
}