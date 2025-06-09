/*
    CIT 281 Project 1
    Name: Rowan Evans
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const stringLength = getRandomInteger(5, 26);
let result = "";

for (let i = 0; i < stringLength; i++) {
    let randomIndex = getRandomInteger(0, alphabet.length);
    result += alphabet[randomIndex];
}

console.log(`${stringLength} lowercase letters: ${result}`);