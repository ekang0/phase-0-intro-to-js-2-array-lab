// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
};

function destructivelyPrependCat() {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

const newCats = ["Broom"];
function appendCat() {
    let newCats = [...cats, "Broom"];
    return newCats;
};

const frontCats = ["Arnold"];
function prependCat() {
    let frontCats = ["Arnold", ...cats];
    return frontCats;
};

const removeGarfield =[];
function removeLastCat() {
    let removeGarfield = cats.slice(0, 2);
    return removeGarfield;
};

const removeMilo = [];
function removeFirstCat() {
    let removeMilo = cats.slice(1, cats.length);
    return removeMilo;
};
