let highestNumber;
function findHighestNumber() {
    const numbers = [3, 6, 2, 1, 5, 4, 7, 8, 9, 10];
    highestNumber = Math.max(...numbers);
    // De tre prikkene er en spread operator
    output.innerHTML = `Det største tallet er ${highestNumber}`;
    removeDuplicates();
}

let output = document.querySelector("#output");

let uniqueNames;
function removeDuplicates() {
    const names = [
        "Ørjan",
        "Torild",
        "Pia",
        "Mark",
        "Torild",
        "Pia",
        "Mark",
        "Ørjan",
        "Marte",
        "Anders",
        "Anders",
        "Marte",
    ];
    uniqueNames = [...new Set(names)];
    // Bruker en spread operator her også

    output.innerHTML += `<br>${uniqueNames}`;
}
removeDuplicates();

function countElements() {
    const fruits = [
        "Eple",
        "Banan",
        "Appelsin",
        "Druer",
        "Banan",
        "Tomat",
        "Eple",
        "Banan",
        "Appelsin",
        "Druer",
        "Banan",
        "Tomat",
    ];
    const fruitsCount = {};
    // Counting Epler from fruits
    fruits.forEach((fruit) => {
        if (fruit in fruitsCount) {
            fruitsCount[fruit]++;
        } else {
            fruitsCount[fruit] = 1;
        }
    });
    console.log(fruitsCount);
}
countElements();
